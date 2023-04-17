const steps = [
  {
    _id: 1,
    icon: "font-awesome",
    text: "تعاریف پایه",
    sub_nav: [
      {
        navigate: "/introduction_of_the_account_party",
        text: "معرفی طرف حساب",
      },
      {
        navigate: "/grouping_of_account_parties",
        text: "گروه بندی طرف های حساب",
      },
      {
        navigate: "/introduction_of_staff",
        text: "معرفی پرسنل",
      },
      {
        navigate: "/introducing_the_product_counting_unit",
        text: "معرفی واحد شمارش کالا",
      },
      {
        navigate: "/introducing_the_main_and_sub_of_commodity",
        text: "معرفی گروه اصلی و فرعی کالا",
      },
      {
        navigate: "/introduction_of_commodities",
        text: "معرفی کالاها",
      },
      {
        navigate: "/introduction_of_value_added_groups",
        text: "معرفی گروه های ارزش افزوده",
      },
      {
        navigate: "/introduction_of_different_types_of_banks_in_the_country",
        text: "معرفی انواع بانک های کشور",
      },
      {
        navigate: "/introduction_of_bank_accounts",
        text: "معرفی حساب های بانکی",
      },
      {
        navigate: "/introducing_the_card_reader",
        text: "معرفی دستگاه کارت خوان",
      },
      {
        navigate: "/introducing_the_cities_of_the_country",
        text: "معرفی شهرهای کشور",
      },
      {
        navigate: "/designing_the_appearance_of_all_types_of_cheque",
        text: "طراحی ظاهر انواع چک",
      },
      {
        navigate: "/introduction_of_income_expense_fund",
        text: "معرفی درآمد / هزینه / صندوق",
      },
      {
        navigate: "/introduction_of_account_headings",
        text: "معرفی سرفصل های حساب (کل، معین، تفصیل)",
      },
    ],
  },
  {
    _id: 2,
    icon: "cc-paypal",
    text: "خرید و فروش",
    sub_nav: [
      {
        navigate: "/sales_invoice",
        text: "فاکتور فروش",
      },
      {
        navigate: "/purchase_invoice",
        text: "فاکتور خرید",
      },
      {
        navigate: "/sales_return_invoice",
        text: "فاکتور برگشت از فروش",
      },
      {
        navigate: "/purchase_return_invoice",
        text: "فاکتور برگشت از خرید",
      },
      {
        navigate: "/sales_proforma",
        text: "پیش فاکتور فروش",
      },
      {
        navigate: "/waste_invoice",
        text: "فاکتور ضایعات",
      },
      {
        navigate: "/bill_of_profit_and_forfiet",
        text: "صورت حساب سود و زیان",
      },
      {
        navigate: "/quarterly_asset_reports_TTMS",
        text: "گزارشات فصلی دارایی (TTMS)",
      },
    ],
  },
  {
    _id: 3,
    icon: "file-text",
    text: "گزارشات خرید و فروش",
    sub_nav: [
      {
        navigate: "/report_all_types_of_invoices",
        text: "گزارش انواع فاکتورها (چاپ دسته ای فاکتورها)",
      },
      {
        navigate: "/periodic_report_of_purchase_and_sale",
        text: "گزارش دوره ای خرید و فروش",
      },
      {
        navigate: "/sales_report_by_month_season_year",
        text: "گزارش فروش به تفکیک ماه، فصل، سال",
      },
      {
        navigate: "/statistical_sales_report_by_product",
        text: "گزارش آماری فروش بر اساس کالا",
      },
      {
        navigate: "/purchase_report_by_month_season_year",
        text: "گزارش خرید به تفکیک ماه، فصل، سال",
      },
      {
        navigate: "/statistical_report_of_purchases_based_on_commodity",
        text: "گزارش آماری خرید بر اساس کالا",
      },
      {
        navigate: "/purchase_statistics_report_based_on_account_party",
        text: "گزارش آماری خرید بر اساس طرف حساب",
      },
    ],
  },
  {
    _id: 4,
    icon: "usd",
    text: "گزارش سود ناخالص فروش کالا",
    sub_nav: [
      {
        navigate: "/profit_by_product",
        text: "سود به تفکیک کالاها",
      },
      {
        navigate: "/profit_by_invoices",
        text: "سود به تفکیک فاکتورها",
      },
      {
        navigate: "/profit_by_account_parties",
        text: "سود به تفکیک طرف های حساب",
      },
    ],
  },
  {
    _id: 5,
    icon: "dashboard",
    text: "انبار",
    sub_nav: [
      {
        navigate: "/waste_invoice_warehouse",
        text: "فاکتور ضایعات",
      },
      {
        navigate: "/transfer_between_warehouses",
        text: "انتقال بین انبارها",
      },
    ],
  },
  {
    _id: 6,
    icon: "file-text",
    text: "گزارشات کالا و انبار",
    sub_nav: [
      {
        navigate: "/barcode_printing_of_commodities",
        text: "چاپ بارکد کالاها",
      },
      {
        navigate: "/circulation_of_commodity_in_the_warehouse",
        text: "گردش کالا در انبار (کاردکس)",
      },
      {
        navigate: "/inventory_of_warehouse_commodities",
        text: "موجودی کالاهای انبار",
      },
      {
        navigate: "/inventory_of_commodities_by_warehouse",
        text: "موجودی کالاها به تفکیک انبار",
      },
      {
        navigate: "/the_point_of_ordering_commodities",
        text: "نقطه سفارش کالاها",
      },
    ],
  },
  {
    _id: 7,
    icon: "dashboard",
    text: "مدیریت مالی",
    sub_nav: [
      {
        navigate: "/receiving_payment",
        text: "دریافت / پرداخت",
      },
      {
        navigate: "/accounting_documents",
        text: "اسناد حسابداری",
      },
    ],
  },
  {
    _id: 8,
    icon: "pied-piper",
    text: "اول دوره",
    sub_nav: [
      {
        navigate: "/first_fund_period",
        text: "اول دوره صندوق",
      },
      {
        navigate: "/first_period_of_bank_accounts",
        text: "اول دوره حساب های بانکی",
      },
      {
        navigate: "/the_first_period_of_the_account_party",
        text: "اول دوره طرف حساب",
      },
      {
        navigate: "/cheques_received_for_the_first_period",
        text: "چک های دریافتی اول دوره",
      },
      {
        navigate: "/pay_cheques_for_the_first_period",
        text: "چک های پرداختی اول دوره",
      },
      {
        navigate: "/first_period_stock_of_commodities",
        text: "موجودی اول دوره کالاها",
      },
    ],
  },
  {
    _id: 9,
    icon: "dashboard",
    text: "مدیریت چک",
    sub_nav: [
      {
        navigate: "/operation_of_incoming_cheques",
        text: "عملیات چک های دریافتی",
      },
      {
        navigate: "/operation_of_paid_cheques",
        text: "عملیات چک های پرداختی",
      },
      {
        navigate: "/introduction_of_cheque_book",
        text: "معرفی دسته چک",
      },
      {
        navigate: "/chequebook_report",
        text: "گزارش دسته چک",
      },
      {
        navigate: "/received_cheques_report",
        text: "گزارش چک های دریافتی",
      },
      {
        navigate: "/reports_of_paid_cheques",
        text: "گزارش چک های پرداختی",
      },
      {
        navigate: "/payment_cheque_history",
        text: "سابقه گردش چک دریافتی",
      },
      {
        navigate: "/payment_cheque_circulation_report",
        text: "گزارش گردش چک پرداختی",
      },
    ],
  },
  {
    _id: 10,
    icon: "shield",
    text: "امنیت",
    sub_nav: [
      {
        navigate: "/list_of_users",
        text: "فهرست کاربران",
      },
      {
        navigate: "/change_user_password",
        text: "تغییر رمز کاربری",
      },
    ],
  },
  {
    _id: 11,
    icon: "cog",
    text: "امکانات",
    sub_nav: [
      {
        navigate: "/phonebook",
        text: "دفترچه تلفن",
      },
    ],
  },
];

export function getNavigates() {
  return steps;
}
