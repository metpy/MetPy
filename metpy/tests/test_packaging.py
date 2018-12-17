# Copyright (c) 2018 MetPy Developers.
# Distributed under the terms of the BSD 3-Clause License.
# SPDX-License-Identifier: BSD-3-Clause
"""Test package tools."""

from metpy.calc import tke
from metpy.io import Level2File

def test_modules_set():
    assert tke.__module__ == 'metpy.calc'
    assert Level2File.__module__ == 'metpy.io'
