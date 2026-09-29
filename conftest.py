import pytest
from playwright.sync_api import Page


@pytest.fixture(autouse=True)
def open_sauce_demo(page: Page):
    page.goto("https://www.saucedemo.com/")
    print(f"\nCurrent URL: {page.url}")
