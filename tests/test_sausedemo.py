from pages.login_page import LoginPage
from pages.inventory_page import InventoryPage
from pages.cart_page import CartPage
from pages.checkout_step_one_page import CheckoutStepOnePage
from pages.checkout_step_two_page import CheckoutStepTwoPage


def test_buy_sauce_labs_backpack(page):

    print(f"\nTEST URL: {page.url}")

    assert page.url == "https://www.saucedemo.com/"

    # Login
    login_page = LoginPage(page)

    login_page.login(
        username="standard_user",
        password="secret_sauce"
    )

def test_buy_sauce_labs_backpack(page):

    # Login
    login_page = LoginPage(page)

    login_page.login(
        username="standard_user",
        password="secret_sauce"
    )

    # Inventory
    inventory_page = InventoryPage(page)

    assert inventory_page.is_opened()

    # Проверяем товар
    expected_name = "Sauce Labs Backpack"

    expected_description = (
        "carry.allTheThings() with the sleek, streamlined "
        "Sly Pack that melds uncompromising style with "
        "unequaled laptop and tablet protection."
    )

    expected_price = "$29.99"

    assert inventory_page.get_backpack_name() == expected_name
    assert inventory_page.get_backpack_description() == expected_description
    assert inventory_page.get_backpack_price() == expected_price

    # Проверяем кнопку Add to cart
    assert inventory_page.is_add_to_cart_enabled()

    # Добавляем товар
    inventory_page.add_backpack_to_cart()

    # Проверяем корзину
    assert inventory_page.get_cart_count() == "1"

    # Переходим в корзину
    inventory_page.open_cart()

    cart_page = CartPage(page)

    assert cart_page.is_opened()

    # Проверяем товар в корзине
    assert cart_page.get_backpack_name() == expected_name
    assert cart_page.get_backpack_description() == expected_description
    assert cart_page.get_backpack_price() == expected_price

    # Проверяем, что цена такая же, как на Inventory
    assert (
        cart_page.get_backpack_price()
        == inventory_page.get_backpack_price()
    )

    # Checkout
    cart_page.checkout()

    checkout_step_one = CheckoutStepOnePage(page)

    assert checkout_step_one.is_opened()

    # Заполняем данные
    checkout_step_one.fill_customer_information(
        first_name="John",
        last_name="Doe",
        zip_code="10115"
    )

    checkout_step_one.continue_checkout()

    # Checkout Step Two
    checkout_step_two = CheckoutStepTwoPage(page)

    assert checkout_step_two.is_opened()

    # Проверяем товар
    assert checkout_step_two.get_backpack_name() == expected_name
    assert checkout_step_two.get_backpack_description() == expected_description
    assert checkout_step_two.get_backpack_price() == expected_price

    # Finish
    checkout_step_two.finish()
