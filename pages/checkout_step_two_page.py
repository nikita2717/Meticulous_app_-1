from playwright.sync_api import Page


class CheckoutStepTwoPage:

    URL = "https://www.saucedemo.com/checkout-step-two.html"

    def __init__(self, page: Page):
        self.page = page

        self.backpack = page.locator(
            '[data-test="inventory-item"]'
        ).filter(
            has_text="Sauce Labs Backpack"
        )

        self.backpack_name = self.backpack.locator(
            '[data-test="inventory-item-name"]'
        )

        self.backpack_description = self.backpack.locator(
            '[data-test="inventory-item-desc"]'
        )

        self.backpack_price = self.backpack.locator(
            '[data-test="inventory-item-price"]'
        )

        self.finish_button = page.locator(
            '[data-test="finish"]'
        )

    def is_opened(self):
        return self.page.url == self.URL

    def get_backpack_name(self):
        return self.backpack_name.inner_text()

    def get_backpack_description(self):
        return self.backpack_description.inner_text()

    def get_backpack_price(self):
        return self.backpack_price.inner_text()

    def finish(self):
        self.finish_button.click()
