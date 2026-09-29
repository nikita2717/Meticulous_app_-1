from playwright.sync_api import Page


class CheckoutStepOnePage:

    URL = "https://www.saucedemo.com/checkout-step-one.html"

    def __init__(self, page: Page):
        self.page = page

        self.first_name_input = page.locator(
            '[data-test="firstName"]'
        )

        self.last_name_input = page.locator(
            '[data-test="lastName"]'
        )

        self.zip_code_input = page.locator(
            '[data-test="postalCode"]'
        )

        self.continue_button = page.locator(
            '[data-test="continue"]'
        )

    def is_opened(self):
        return self.page.url == self.URL

    def fill_customer_information(
        self,
        first_name,
        last_name,
        zip_code
    ):
        self.first_name_input.fill(first_name)
        self.last_name_input.fill(last_name)
        self.zip_code_input.fill(zip_code)

    def continue_checkout(self):
        self.continue_button.click()
