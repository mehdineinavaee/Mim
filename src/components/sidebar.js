import React from "react";
import logo from "../assets/img/logo.png";
import user from "../assets/img/user.jpg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="/#" className="brand-link">
          <img
            src={logo}
            alt="Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">پنل مدیریت</span>
        </a>

        <div className="sidebar">
          <div>
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={user}
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="/#" className="d-block">
                  مهدی نینوایی
                </a>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-font-awesome"></i>
                    <p>
                      تعاریف پایه
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink
                        to="/introduction_of_the_account_party"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی طرف حساب</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/grouping_of_account_parties"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گروه بندی طرف های حساب</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/introduction_of_staff" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی پرسنل</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introducing_the_product_counting_unit"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی واحد شمارش کالا</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introducing_the_main_and_sub_of_commodity"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی گروه اصلی و فرعی کالا</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introduction_of_commodities"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی کالاها</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introduction_of_value_added_groups"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی گروه های ارزش افزوده</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introduction_of_different_types_of_banks_in_the_country"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی انواع بانک های کشور</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introduction_of_bank_accounts"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی حساب های بانکی</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introducing_the_card_reader"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی دستگاه کارت خوان</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introducing_the_cities_of_the_country"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی شهرهای کشور</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/designing_the_appearance_of_all_types_of_cheque"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>طراحی ظاهر انواع چک</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introduction_of_income_expense_fund"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی درآمد / هزینه / صندوق</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introduction_of_account_headings"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی سرفصل های حساب (کل، معین، تفصیل)</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-cc-paypal"></i>
                    <p>
                      خرید و فروش
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/sales_invoice" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>فاکتور فروش</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/purchase_invoice" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>فاکتور خرید</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/sales_return_invoice" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>فاکتور برگشت از فروش</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/purchase_return_invoice"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>فاکتور برگشت از خرید</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/sales_proforma" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>پیش فاکتور فروش</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/waste_invoice" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>فاکتور ضایعات</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/bill_of_profit_and_forfiet"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>صورت حساب سود و زیان</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/quarterly_asset_reports_TTMS"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارشات فصلی دارایی (TTMS)</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-file-text"></i>
                    <p>
                      گزارشات خرید و فروش
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink
                        to="/report_all_types_of_invoices"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش انواع فاکتورها (چاپ دسته ای فاکتورها)</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/periodic_report_of_purchase_and_sale"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش دوره ای خرید و فروش</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/sales_report_by_month_season_year"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش فروش به تفکیک ماه، فصل، سال</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/statistical_sales_report_by_product"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش آماری فروش بر اساس کالا</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/purchase_report_by_month_season_year"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش خرید به تفکیک ماه، فصل، سال</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/statistical_report_of_purchases_based_on_commodity"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش آماری خرید بر اساس کالا</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/purchase_statistics_report_based_on_account_party"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش آماری خرید بر اساس طرف حساب</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-usd"></i>
                    <p>
                      گزارش سود ناخالص فروش کالا
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/Profit_by_product" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>سود به تفکیک کالاها</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/Profit_by_invoices" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>سود به تفکیک فاکتورها</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Profit_by_account_parties"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>سود به تفکیک طرف های حساب</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-dashboard"></i>
                    <p>
                      انبار
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink
                        to="/waste_invoice_warehouse"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>فاکتور ضایعات</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Transfer_between_warehouses"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>انتقال بین انبارها</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-file-text"></i>
                    <p>
                      گزارشات کالا و انبار
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink
                        to="/barcode_printing_of_commodities"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>چاپ بارکد کالاها</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/circulation_of_commodity_in_the_warehouse"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گردش کالا در انبار (کاردکس)</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/inventory_of_warehouse_commodities"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>موجودی کالاهای انبار</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/inventory_of_commodities_by_warehouse"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>موجودی کالاها به تفکیک انبار</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/the_point_of_ordering_commodities"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>نقطه سفارش کالاها</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-dashboard"></i>
                    <p>
                      مدیریت مالی
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/receiving_payment" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>دریافت / پرداخت</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/accounting_documents" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>اسناد حسابداری</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-pied-piper"></i>
                    <p>
                      اول دوره
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/first_fund_period" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>اول دوره صندوق</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/first_period_of_bank_accounts"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>اول دوره حساب های بانکی</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/the_first_period_of_the_account_party"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>اول دوره طرف حساب</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/cheques_received_for_the_first_period"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>چک های دریافتی اول دوره</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/pay_cheques_for_the_first_period"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>چک های پرداختی اول دوره</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/first_period_stock_of_commodities"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>موجودی اول دوره کالاها</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-dashboard"></i>
                    <p>
                      مدیریت چک
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink
                        to="/operation_of_incoming_cheques"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>عملیات چک های دریافتی</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/operation_of_paid_cheques"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>عملیات چک های پرداختی</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/introduction_of_cheque_book"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>معرفی دسته چک</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/chequebook_report" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش دسته چک</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/received_cheques_report"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش چک های دریافتی</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/reports_of_paid_cheques"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش چک های پرداختی</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/payment_cheque_history"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>سابقه گردش چک دریافتی</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/payment_cheque_circulation_report"
                        className="nav-link"
                      >
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>گزارش گردش چک پرداختی</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-shield"></i>
                    <p>
                      امنیت
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/list_of_users" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>فهرست کاربران</p>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/change_user_password" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>تغییر رمز کاربری</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview">
                  <a href="/#" className="nav-link">
                    <i className="nav-icon fa fa-cog"></i>
                    <p>
                      امکانات
                      <i className="right fa fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/phonebook" className="nav-link">
                        <i className="fa fa-circle-o nav-icon"></i>
                        <p>دفترچه تلفن</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
