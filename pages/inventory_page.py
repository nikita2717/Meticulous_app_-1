from playwright.sync_api import Page


class InventoryPage:

    URL = "https://www.saucedemo.com/inventory.html"

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

        self.backpack_add_to_cart = self.backpack.locator(
            'button[data-test="add-to-cart-sauce-labs-backpack"]'
        )

        self.cart_badge = page.locator(
            '[data-test="shopping-cart-badge"]'
        )

        self.cart_link = page.locator(
            '[data-test="shopping-cart-link"]'
        )

    def is_opened(self):
        return self.page.url == self.URL

    def get_backpack_name(self):
        return self.backpack_name.inner_text()

    def get_backpack_description(self):
        return self.backpack_description.inner_text()

    def get_backpack_price(self):
        return self.backpack_price.inner_text()

    def is_add_to_cart_enabled(self):
        return self.backpack_add_to_cart.is_enabled()

    def add_backpack_to_cart(self):
        self.backpack_add_to_cart.click()

    def get_cart_count(self):
        return self.cart_badge.inner_text()

    def open_cart(self):
        self.cart_link.click()
