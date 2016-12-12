# Copyright (c) 2008-2015 MetPy Developers.
# Distributed under the terms of the BSD 3-Clause License.
# SPDX-License-Identifier: BSD-3-Clause
"""Contains a collection of basic calculations.

These include:

* wind components
* heat index
* windchill
"""

from __future__ import division

import numpy as np

from ..constants import g, omega, Rd
from ..package_tools import Exporter
from ..units import atleast_1d, masked_array, units

exporter = Exporter(globals())


@exporter.export
def get_wind_speed(u, v):
    r"""Compute the wind speed from u and v-components.

    Parameters
    ----------
    u : array_like
        Wind component in the X (East-West) direction
    v : array_like
        Wind component in the Y (North-South) direction

    Returns
    -------
    wind speed: array_like
        The speed of the wind

    See Also
    --------
    get_wind_components
    """
    speed = np.sqrt(u * u + v * v)
    return speed


@exporter.export
def get_wind_dir(u, v):
    r"""Compute the wind direction from u and v-components.

    Parameters
    ----------
    u : array_like
        Wind component in the X (East-West) direction
    v : array_like
        Wind component in the Y (North-South) direction

    Returns
    -------
    wind direction: `pint.Quantity`
        The direction of the wind, specified as the direction from
        which it is blowing, with 0 being North.

    See Also
    --------
    get_wind_components
    """
    wdir = 90. * units.deg - np.arctan2(-v, -u)
    origshape = wdir.shape
    wdir = atleast_1d(wdir)
    wdir[wdir < 0] += 360. * units.deg
    return wdir.reshape(origshape)


@exporter.export
def get_wind_components(speed, wdir):
    r"""Calculate the U, V wind vector components from the speed and direction.

    Parameters
    ----------
    speed : array_like
        The wind speed (magnitude)
    wdir : array_like
        The wind direction, specified as the direction from which the wind is
        blowing, with 0 being North.

    Returns
    -------
    u, v : tuple of array_like
        The wind components in the X (East-West) and Y (North-South)
        directions, respectively.

    See Also
    --------
    get_wind_speed
    get_wind_dir

    Examples
    --------
    >>> from metpy.units import units
    >>> metpy.calc.get_wind_components(10. * units('m/s'), 225. * units.deg)
    (<Quantity(7.071067811865475, 'meter / second')>,
     <Quantity(7.071067811865477, 'meter / second')>)
    """
    u = -speed * np.sin(wdir)
    v = -speed * np.cos(wdir)
    return u, v


@exporter.export
def windchill(temperature, speed, face_level_winds=False, mask_undefined=True):
    r"""Calculate the Wind Chill Temperature Index (WCTI).

    Calculates WCTI from the current temperature and wind speed.

    Specifically, these formulas assume that wind speed is measured at
    10m.  If, instead, the speeds are measured at face level, the winds
    need to be multiplied by a factor of 1.5 (this can be done by specifying
    `face_level_winds` as `True`.)

    Parameters
    ----------
    temperature : `pint.Quantity`
        The air temperature
    speed : `pint.Quantity`
        The wind speed at 10m.  If instead the winds are at face level,
        `face_level_winds` should be set to `True` and the 1.5 multiplicative
        correction will be applied automatically.
    face_level_winds : bool, optional
        A flag indicating whether the wind speeds were measured at facial
        level instead of 10m, thus requiring a correction.  Defaults to
        `False`.
    mask_undefined : bool, optional
        A flag indicating whether a masked array should be returned with
        values where wind chill is undefined masked.  These are values where
        the temperature > 50F or wind speed <= 3 miles per hour. Defaults
        to `True`.

    Returns
    -------
    `pint.Quantity`
        The corresponding Wind Chill Temperature Index value(s)

    See Also
    --------
    heat_index

    References
    ----------
    .. [4] Federal Coordinator for Meteorological Services and Supporting Research: Report on
           Wind Chill Temperature and Extreme Heat Indices: Evaluation and Improvement
           Projects. Washington, DC: Office of the Federal Coordinator for Meteorological
           Services and Supporting Research, 2003.
           `FCM-R19-2003 <../_static/FCM-R19-2003-WindchillReport.pdf>`_
    """
    # Correct for lower height measurement of winds if necessary
    if face_level_winds:
        # No in-place so that we copy
        # noinspection PyAugmentAssignment
        speed = speed * 1.5

    temp_limit, speed_limit = 10. * units.degC, 3 * units.mph
    speed_factor = speed.to('km/hr').magnitude ** 0.16
    delta = temperature - 0. * units.degC
    wcti = (13.12 * units.degC + 0.6215 * delta -
            11.37 * units.delta_degC * speed_factor + 0.3965 * delta * speed_factor)

    # See if we need to mask any undefined values
    if mask_undefined:
        mask = np.array((temperature > temp_limit) | (speed <= speed_limit))
        if mask.any():
            wcti = masked_array(wcti, mask=mask)

    return wcti


@exporter.export
def heat_index(temperature, rh, mask_undefined=True):
    r"""Calculate the Heat Index from the current temperature and relative humidity.

    The implementation uses the formula outlined in [6].

    Parameters
    ----------
    temperature : `pint.Quantity`
        Air temperature
    rh : array_like
        The relative humidity expressed as a unitless ratio in the range [0, 1].
        Can also pass a percentage if proper units are attached.

    Returns
    -------
    `pint.Quantity`
        The corresponding Heat Index value(s)

    Other Parameters
    ----------------
    mask_undefined : bool, optional
        A flag indicating whether a masked array should be returned with
        values where heat index is undefined masked.  These are values where
        the temperature < 80F or relative humidity < 40 percent. Defaults
        to `True`.

    See Also
    --------
    windchill

    References
    ----------
    .. [5] Steadman, R.G., 1979: The assessment of sultriness. Part I: A
           temperature-humidity index based on human physiology and clothing
           science. J. Appl. Meteor., 18, 861-873.

    .. [6] Rothfusz, L.P.: The Heat Index "Equation". Fort Worth, TX: Scientific Services
           Division, NWS Southern Region Headquarters, 1990.
           `SR90-23 <http://www.weather.gov/media/ffc/ta_htindx.PDF>`_
    """
    delta = temperature - 0. * units.degF
    rh2 = rh * rh
    delta2 = delta * delta

    # Calculate the Heat Index -- constants converted for RH in [0, 1]
    hi = (-42.379 * units.degF + 2.04901523 * delta +
          1014.333127 * units.delta_degF * rh - 22.475541 * delta * rh -
          6.83783e-3 / units.delta_degF * delta2 - 5.481717e2 * units.delta_degF * rh2 +
          1.22874e-1 / units.delta_degF * delta2 * rh + 8.5282 * delta * rh2 -
          1.99e-2 / units.delta_degF * delta2 * rh2)

    # See if we need to mask any undefined values
    if mask_undefined:
        mask = np.array((temperature < 80. * units.degF) | (rh < 40 * units.percent))
        if mask.any():
            hi = masked_array(hi, mask=mask)

    return hi


@exporter.export
def pressure_to_height_std(pressure):
    r"""Convert pressure data to heights using the U.S. standard atmosphere.

    The implementation uses the formula outlined in [7].

    Parameters
    ----------
    pressure : `pint.Quantity`
        Atmospheric pressure

    Returns
    -------
    `pint.Quantity`
        The corresponding height value(s)

    Notes
    -----
    .. math:: Z = \frac{T_0}{\Gamma}[1-\frac{p}{p_0}^\frac{R\Gamma}{g}]

    References
    ----------
    .. [7] Hobbs, Peter V. and Wallace, John M., 1977: Atmospheric Science, an Introductory
            Survey. 60-61.
    """
    t0 = 288. * units.kelvin
    gamma = 6.5 * units('K/km')
    p0 = 1013.25 * units.mbar
    return (t0 / gamma) * (1 - (pressure / p0)**(Rd * gamma / g))


@exporter.export
def coriolis_parameter(latitude):
    r"""Calculate the coriolis parameter at each point.

    The implementation uses the formula outlined in [8].

    Parameters
    ----------
    latitude : array_like
        Latitude at each point

    Returns
    -------
    `pint.Quantity`
        The corresponding coriolis force at each point

    References
    ----------
    .. [8] Hobbs, Peter V. and Wallace, John M., 1977: Atmospheric Science, an Introductory
            Survey. 370-371.
    """
    return 2. * omega * np.sin(latitude)
