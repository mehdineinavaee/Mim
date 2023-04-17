import React from "react";
import { Route, Routes } from "react-router-dom";

// Basic Definitions
import Designing_the_appearance_of_all_types_of_cheque from "../pages/basic_definitions/designing_the_appearance_of_all_types_of_cheque";
import Grouping_of_account_parties from "../pages/basic_definitions/grouping_of_account_parties";
import Introducing_the_card_reader from "../pages/basic_definitions/introducing_the_card_reader";
import Introducing_the_cities_of_the_country from "../pages/basic_definitions/introducing_the_cities_of_the_country";
import Introducing_the_main_and_sub_of_commodity from "../pages/basic_definitions/introducing_the_main_and_sub_of_commodity";
import Introducing_the_product_counting_unit from "../pages/basic_definitions/introducing_the_product_counting_unit";
import Introduction_of_account_headings from "../pages/basic_definitions/introduction_of_account_headings";
import Introduction_of_bank_accounts from "../pages/basic_definitions/introduction_of_bank_accounts";
import Introduction_of_commodities from "../pages/basic_definitions/introduction_of_commodities";
import Introduction_of_different_types_of_banks_in_the_country from "../pages/basic_definitions/introduction_of_different_types_of_banks_in_the_country";
import Introduction_of_income_expense_fund from "../pages/basic_definitions/introduction_of_income_expense_fund";
import Introduction_of_staff from "../pages/basic_definitions/introduction_of_staff";
import Introduction_of_the_account_party from "../pages/basic_definitions/introduction_of_the_account_party";
import Introduction_of_value_added_groups from "../pages/basic_definitions/introduction_of_value_added_groups";

// Cheque Management
import Chequebook_report from "../pages/cheque_management/chequebook_report";
import Introduction_of_cheque_book from "../pages/cheque_management/introduction_of_cheque_book";
import Operation_of_incoming_cheques from "../pages/cheque_management/operation_of_incoming_cheques";
import Operation_of_paid_cheques from "../pages/cheque_management/operation_of_paid_cheques";
import Payment_cheque_circulation_report from "../pages/cheque_management/payment_cheque_circulation_report";
import Payment_cheque_history from "../pages/cheque_management/payment_cheque_history";
import Received_cheques_report from "../pages/cheque_management/received_cheques_report";
import Reports_of_paid_cheques from "../pages/cheque_management/reports_of_paid_cheques";

// Commodity and Warehouse Reports
import Barcode_printing_of_commodities from "../pages/commodity_and_warehouse_reports/barcode_printing_of_commodities";
import Circulation_of_commodity_in_the_warehouse from "../pages/commodity_and_warehouse_reports/circulation_of_commodity_in_the_warehouse";
import Inventory_of_commodities_by_warehouse from "../pages/commodity_and_warehouse_reports/inventory_of_commodities_by_warehouse";
import Inventory_of_warehouse_commodities from "../pages/commodity_and_warehouse_reports/inventory_of_warehouse_commodities";
import The_point_of_ordering_commodities from "../pages/commodity_and_warehouse_reports/the_point_of_ordering_commodities";

// Facilities
import Phonebook from "../pages/facilities/phonebook";

// Financial Management
import Accounting_documents from "../pages/financial_management/accounting_documents";
import Receiving_payment from "../pages/financial_management/receiving_payment";

// First Period
import Cheques_received_for_the_first_period from "../pages/first_period/cheques_received_for_the_first_period";
import First_fund_period from "../pages/first_period/first_fund_period";
import First_period_of_bank_accounts from "../pages/first_period/first_period_of_bank_accounts";
import First_period_stock_of_commodities from "../pages/first_period/first_period_stock_of_commodities";
import Pay_cheques_for_the_first_period from "../pages/first_period/pay_cheques_for_the_first_period";
import The_first_period_of_the_account_party from "../pages/first_period/the_first_period_of_the_account_party";

// Home
import Home from "../pages/home/home";

// Login
import Login from "../pages/login/login";

// Purchase and Sale
import Bill_of_profit_and_forfiet from "../pages/purchase_and_sale/bill_of_profit_and_forfiet";
import Purchase_invoice from "../pages/purchase_and_sale/purchase_invoice";
import Purchase_return_invoice from "../pages/purchase_and_sale/purchase_return_invoice";
import Quarterly_asset_reports_TTMS from "../pages/purchase_and_sale/quarterly_asset_reports_TTMS";
import Sales_invoice from "../pages/purchase_and_sale/sales_invoice";
import Sales_proforma from "../pages/purchase_and_sale/sales_proforma";
import Sales_return_invoice from "../pages/purchase_and_sale/sales_return_invoice";
import Waste_invoice from "../pages/purchase_and_sale/waste_invoice";

// Purchase and Sale Reports
import Periodic_report_of_purchase_and_sale from "../pages/purchase_and_sale_reports/periodic_report_of_purchase_and_sale";
import Purchase_report_by_month_season_year from "../pages/purchase_and_sale_reports/purchase_report_by_month_season_year";
import Purchase_statistics_report_based_on_account_party from "../pages/purchase_and_sale_reports/purchase_statistics_report_based_on_account_party";
import Report_all_types_of_invoices from "../pages/purchase_and_sale_reports/report_all_types_of_invoices";
import Sales_report_by_month_season_year from "../pages/purchase_and_sale_reports/sales_report_by_month_season_year";
import Statistical_report_of_purchases_based_on_commodity from "../pages/purchase_and_sale_reports/statistical_report_of_purchases_based_on_commodity";
import Statistical_sales_report_by_product from "../pages/purchase_and_sale_reports/statistical_sales_report_by_product";

// Reports of Gross Profit from the Sale of Commodity
import Profit_by_account_parties from "../pages/report_of_gross_profit_from_the_sale_of_commodity/profit_by_account_parties";
import Profit_by_invoices from "../pages/report_of_gross_profit_from_the_sale_of_commodity/profit_by_invoices";
import Profit_by_product from "../pages/report_of_gross_profit_from_the_sale_of_commodity/profit_by_product";

// Security
import Change_user_password from "../pages/security/change_user_password";
import List_of_users from "../pages/security/list_of_users";

// Warehouse
import Transfer_between_warehouses from "../pages/warehouse/transfer_between_warehouses";
import Waste_invoice_warehouse from "../pages/warehouse/waste_invoice_warehouse";

const My_routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/designing_the_appearance_of_all_types_of_cheque"
          element={<Designing_the_appearance_of_all_types_of_cheque />}
        />
        <Route
          path="/grouping_of_account_parties"
          element={<Grouping_of_account_parties />}
        />
        <Route
          path="/introducing_the_card_reader"
          element={<Introducing_the_card_reader />}
        />
        <Route
          path="/introducing_the_cities_of_the_country"
          element={<Introducing_the_cities_of_the_country />}
        />
        <Route
          path="/introducing_the_main_and_sub_of_commodity"
          element={<Introducing_the_main_and_sub_of_commodity />}
        />
        <Route
          path="/introducing_the_product_counting_unit"
          element={<Introducing_the_product_counting_unit />}
        />
        <Route
          path="/introduction_of_account_headings"
          element={<Introduction_of_account_headings />}
        />
        <Route
          path="/introduction_of_bank_accounts"
          element={<Introduction_of_bank_accounts />}
        />
        <Route
          path="/introduction_of_commodities"
          element={<Introduction_of_commodities />}
        />
        <Route
          path="/introduction_of_different_types_of_banks_in_the_country"
          element={<Introduction_of_different_types_of_banks_in_the_country />}
        />
        <Route
          path="/introduction_of_income_expense_fund"
          element={<Introduction_of_income_expense_fund />}
        />
        <Route
          path="/introduction_of_staff"
          element={<Introduction_of_staff />}
        />
        <Route
          path="/introduction_of_the_account_party"
          element={<Introduction_of_the_account_party />}
        />
        <Route
          path="/introduction_of_value_added_groups"
          element={<Introduction_of_value_added_groups />}
        />
        <Route
          path="/bill_of_profit_and_forfiet"
          element={<Bill_of_profit_and_forfiet />}
        />
        <Route path="/purchase_invoice" element={<Purchase_invoice />} />
        <Route
          path="/purchase_return_invoice"
          element={<Purchase_return_invoice />}
        />
        <Route
          path="/quarterly_asset_reports_TTMS"
          element={<Quarterly_asset_reports_TTMS />}
        />
        <Route path="/sales_invoice" element={<Sales_invoice />} />
        <Route path="/sales_proforma" element={<Sales_proforma />} />
        <Route
          path="/sales_return_invoice"
          element={<Sales_return_invoice />}
        />
        <Route path="/waste_invoice" element={<Waste_invoice />} />
        <Route
          path="/periodic_report_of_purchase_and_sale"
          element={<Periodic_report_of_purchase_and_sale />}
        />
        <Route
          path="/purchase_report_by_month_season_year"
          element={<Purchase_report_by_month_season_year />}
        />
        <Route
          path="/purchase_statistics_report_based_on_account_party"
          element={<Purchase_statistics_report_based_on_account_party />}
        />
        <Route
          path="/report_all_types_of_invoices"
          element={<Report_all_types_of_invoices />}
        />
        <Route
          path="/sales_report_by_month_season_year"
          element={<Sales_report_by_month_season_year />}
        />
        <Route
          path="/statistical_report_of_purchases_based_on_commodity"
          element={<Statistical_report_of_purchases_based_on_commodity />}
        />
        <Route
          path="/statistical_sales_report_by_product"
          element={<Statistical_sales_report_by_product />}
        />
        <Route
          path="/profit_by_account_parties"
          element={<Profit_by_account_parties />}
        />
        <Route path="/profit_by_invoices" element={<Profit_by_invoices />} />
        <Route path="/profit_by_product" element={<Profit_by_product />} />
        <Route
          path="/transfer_between_warehouses"
          element={<Transfer_between_warehouses />}
        />
        <Route
          path="/waste_invoice_warehouse"
          element={<Waste_invoice_warehouse />}
        />
        <Route
          path="/barcode_printing_of_commodities"
          element={<Barcode_printing_of_commodities />}
        />
        <Route
          path="/circulation_of_commodity_in_the_warehouse"
          element={<Circulation_of_commodity_in_the_warehouse />}
        />
        <Route
          path="/inventory_of_commodities_by_warehouse"
          element={<Inventory_of_commodities_by_warehouse />}
        />
        <Route
          path="/inventory_of_warehouse_commodities"
          element={<Inventory_of_warehouse_commodities />}
        />
        <Route
          path="/the_point_of_ordering_commodities"
          element={<The_point_of_ordering_commodities />}
        />
        <Route
          path="/accounting_documents"
          element={<Accounting_documents />}
        />
        <Route path="/receiving_payment" element={<Receiving_payment />} />
        <Route
          path="/cheques_received_for_the_first_period"
          element={<Cheques_received_for_the_first_period />}
        />
        <Route path="/first_fund_period" element={<First_fund_period />} />
        <Route
          path="/first_period_of_bank_accounts"
          element={<First_period_of_bank_accounts />}
        />
        <Route
          path="/first_period_stock_of_commodities"
          element={<First_period_stock_of_commodities />}
        />
        <Route
          path="/pay_cheques_for_the_first_period"
          element={<Pay_cheques_for_the_first_period />}
        />
        <Route
          path="/the_first_period_of_the_account_party"
          element={<The_first_period_of_the_account_party />}
        />
        <Route path="/chequebook_report" element={<Chequebook_report />} />
        <Route
          path="/introduction_of_cheque_book"
          element={<Introduction_of_cheque_book />}
        />
        <Route
          path="/operation_of_incoming_cheques"
          element={<Operation_of_incoming_cheques />}
        />
        <Route
          path="/operation_of_paid_cheques"
          element={<Operation_of_paid_cheques />}
        />
        <Route
          path="/payment_cheque_circulation_report"
          element={<Payment_cheque_circulation_report />}
        />
        <Route
          path="/payment_cheque_history"
          element={<Payment_cheque_history />}
        />
        <Route
          path="/received_cheques_report"
          element={<Received_cheques_report />}
        />
        <Route
          path="/reports_of_paid_cheques"
          element={<Reports_of_paid_cheques />}
        />
        <Route
          path="/change_user_password"
          element={<Change_user_password />}
        />
        <Route path="/list_of_users" element={<List_of_users />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Routes>
    </>
  );
};

export default My_routes;
