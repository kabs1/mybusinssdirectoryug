<template>
  <el-aside :width="asideWidth">
    <h1 class="logo">
      <router-link to="/">
        <app-i18n code="app.title"></app-i18n>
      </router-link>
    </h1>

    <el-menu
      :class="{
        'el-menu-side-nav': true,
        collapsed: collapsed,
      }"
      :collapse="collapsed"
      :collapse-transition="false"
      :router="true"
      background-color="#566573"
      text-color="#fff"
      active-text-color="#A569BD"
      @select="collapseMenuIfMobile()"
    >
      <el-menu-item :class="classFor('/', true)" :route="{ path: '/' }" index="/">
        <i class="el-icon-fa-home"></i>
        <span slot="title">
          <app-i18n code="home.menu"></app-i18n>
        </span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <span>System Users</span>
        </template>
      <el-menu-item-group title="Users">
        <el-menu-item
                :class="classFor('/iam')"
                :route="{ path: '/iam' }"
                index="/iam"
                v-if="hasPermissionToIam"
        >
          <i class="el-icon-fa-user"></i>
          <span slot="title">
          <app-i18n code="iam.menu"></app-i18n>
        </span>
        </el-menu-item>
        <el-menu-item
                :class="classFor('/staff')"
                :route="{ path: '/staff' }"
                index="/staff"
                v-if="hasPermissionToStaff"
        >
          <i class="el-icon-fa-user-secret"></i>
          <span slot="title">
          <app-i18n code="entities.staff.menu"></app-i18n>
        </span>
        </el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group title="Contacts">
        <el-menu-item
                :class="classFor('/customers')"
                :route="{ path: '/customers' }"
                index="/customers"
                v-if="hasPermissionToCustomers"
        >
          <i class="el-icon-fa-heart"></i>
          <span slot="title">
          <app-i18n code="entities.customers.menu"></app-i18n>
        </span>
        </el-menu-item>

        <el-menu-item
                :class="classFor('/suppliers')"
                :route="{ path: '/suppliers' }"
                index="/suppliers"
                v-if="hasPermissionToSuppliers"
        >
          <i class="el-icon-fa-user-circle-o"></i>
          <span slot="title">
          <app-i18n code="entities.suppliers.menu"></app-i18n>
        </span>
        </el-menu-item>
      </el-menu-item-group>
      </el-submenu>

      <el-submenu index="/inventory">
        <template slot="title">
          <span>Inventory</span>
        </template>
        <el-menu-item-group title="Products">
          <el-menu-item
                  :class="classFor('/products')"
                  :route="{ path: '/products' }"
                  index="/products"
                  v-if="hasPermissionToProducts"
          >
            <i class="el-icon-fa-cubes"></i>
            <span slot="title">
          <app-i18n code="entities.products.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/tax-class')"
                  :route="{ path: '/tax-class' }"
                  index="/tax-class"
                  v-if="hasPermissionToTaxClass"
          >
            <i class="el-icon-fa-list"></i>
            <span slot="title">
          <app-i18n code="entities.taxClass.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/variation')"
                  :route="{ path: '/variation' }"
                  index="/variation"
                  v-if="hasPermissionToVariation"
          >
            <i class="el-icon-fa-chevron-right"></i>
            <span slot="title">
          <app-i18n code="entities.variation.menu"></app-i18n>
        </span>
          </el-menu-item>

        </el-menu-item-group>
        <el-menu-item-group title="Grouping">
          <el-menu-item
                  :class="classFor('/brands')"
                  :route="{ path: '/brands' }"
                  index="/brands"
                  v-if="hasPermissionToBrands"
          >
            <i class="el-icon-fa-adjust"></i>
            <span slot="title">
          <app-i18n code="entities.brands.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/categories')"
                  :route="{ path: '/categories' }"
                  index="/categories"
                  v-if="hasPermissionToCategories"
          >
            <i class="el-icon-fa-bandcamp"></i>
            <span slot="title">
          <app-i18n code="entities.categories.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/units')"
                  :route="{ path: '/units' }"
                  index="/units"
                  v-if="hasPermissionToUnits"
          >
            <i class="el-icon-fa-filter"></i>
            <span slot="title">
          <app-i18n code="entities.units.menu"></app-i18n>
        </span>
          </el-menu-item>

        </el-menu-item-group>

        <el-menu-item-group title="Reports">
          <el-menu-item
                  :class="classFor('/stock-adjustments')"
                  :route="{ path: '/stock-adjustments' }"
                  index="/stock-adjustments"
                  v-if="hasPermissionToStockAdjustments"
          >
            <i class="el-icon-fa-cube"></i>
            <span slot="title">
          <app-i18n code="entities.stockAdjustments.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/damages')"
                  :route="{ path: '/damages' }"
                  index="/damages"
                  v-if="hasPermissionToDamages"
          >
            <i class="el-icon-fa-remove"></i>
            <span slot="title">
          <app-i18n code="entities.damages.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/product-logs')"
                  :route="{ path: '/product-logs' }"
                  index="/product-logs"
                  v-if="hasPermissionToProductLogs"
          >
            <i class="el-icon-fa-life-saver"></i>
            <span slot="title">
          <app-i18n code="entities.productLogs.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/price-change')"
                  :route="{ path: '/price-change' }"
                  index="/price-change"
                  v-if="hasPermissionToPriceChange"
          >
            <i class="el-icon-fa-bell"></i>
            <span slot="title">
          <app-i18n code="entities.priceChange.menu"></app-i18n>
        </span>
          </el-menu-item>

        </el-menu-item-group>

        <el-menu-item-group title="Movements">

          <el-menu-item
                  :class="classFor('/stock-transfer')"
                  :route="{ path: '/stock-transfer' }"
                  index="/stock-transfer"
                  v-if="hasPermissionToStockTransfer"
          >
            <i class="el-icon-fa-car"></i>
            <span slot="title">
          <app-i18n code="entities.stockTransfer.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/sales')"
                  :route="{ path: '/sales' }"
                  index="/sales"
                  v-if="hasPermissionToSales"
          >
            <i class="el-icon-fa-shopping-cart"></i>
            <span slot="title">
          <app-i18n code="entities.sales.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/purchases')"
                  :route="{ path: 'purchases' }"
                  index="inventory/purchases"
                  v-if="hasPermissionToPurchases"
          >
            <i class="el-icon-fa-cart-plus"></i>
            <span slot="title">
          <app-i18n code="entities.purchases.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/returns')"
                  :route="{ path: '/returns' }"
                  index="/returns"
                  v-if="hasPermissionToReturns"
          >
            <i class="el-icon-fa-cart-arrow-down"></i>
            <span slot="title">
          <app-i18n code="entities.returns.menu"></app-i18n>
        </span>
          </el-menu-item>

        </el-menu-item-group>

      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <span>Human Resource</span>
        </template>
        <el-menu-item-group title="Leave">
          <el-menu-item
                  :class="classFor('/leave')"
                  :route="{ path: '/leave' }"
                  index="/leave"
                  v-if="hasPermissionToLeave"
          >
            <i class="el-icon-fa-forward"></i>
            <span slot="title">
          <app-i18n code="entities.leave.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/leave-type')"
                  :route="{ path: '/leave-type' }"
                  index="/leave-type"
                  v-if="hasPermissionToLeaveType"
          >
            <i class="el-icon-fa-chevron-right"></i>
            <span slot="title">
          <app-i18n code="entities.leaveType.menu"></app-i18n>
        </span>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Other">
          <el-menu-item
                  :class="classFor('/payroll')"
                  :route="{ path: '/payroll' }"
                  index="/payroll"
                  v-if="hasPermissionToPayroll"
          >
            <i class="el-icon-fa-list-alt"></i>
            <span slot="title">
          <app-i18n code="entities.payroll.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/attendance')"
                  :route="{ path: '/attendance' }"
                  index="/attendance"
                  v-if="hasPermissionToAttendance"
          >
            <i class="el-icon-fa-user-circle"></i>
            <span slot="title">
          <app-i18n code="entities.attendance.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/holiday')"
                  :route="{ path: '/holiday' }"
                  index="/holiday"
                  v-if="hasPermissionToHoliday"
          >
            <i class="el-icon-fa-tree"></i>
            <span slot="title">
          <app-i18n code="entities.holiday.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/allowance-and-deduction')"
                  :route="{ path: '/allowance-and-deduction' }"
                  index="/allowance-and-deduction"
                  v-if="hasPermissionToAllowanceAndDeduction"
          >
            <i class="el-icon-fa-user-times"></i>
            <span slot="title">
          <app-i18n code="entities.allowanceAndDeduction.menu"></app-i18n>
        </span>
          </el-menu-item>

        </el-menu-item-group>

      </el-submenu>


      <el-submenu index="4">
        <template slot="title">
          <span>Settings</span>
        </template>
        <el-menu-item-group title="Notifications">
          <el-menu-item
                  :class="classFor('/notice')"
                  :route="{ path: '/notice' }"
                  index="/notice"
                  v-if="hasPermissionToNotice"
          >
            <i class="el-icon-fa-file-text"></i>
            <span slot="title">
          <app-i18n code="entities.notice.menu"></app-i18n>
        </span>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Configs">
          <el-menu-item
                  :class="classFor('/devices')"
                  :route="{ path: '/devices' }"
                  index="/devices"
                  v-if="hasPermissionToDevices"
          >
            <i class="el-icon-fa-desktop"></i>
            <span slot="title">
          <app-i18n code="entities.devices.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/currency')"
                  :route="{ path: '/currency' }"
                  index="/currency"
                  v-if="hasPermissionToCurrency"
          >
            <i class="el-icon-fa-money"></i>
            <span slot="title">
          <app-i18n code="entities.currency.menu"></app-i18n>
        </span>
          </el-menu-item>

        </el-menu-item-group>
        <el-menu-item-group title="Files">

          <el-menu-item
                  :class="classFor('/documents')"
                  :route="{ path: '/documents' }"
                  index="/documents"
                  v-if="hasPermissionToDocuments"
          >
            <i class="el-icon-fa-file"></i>
            <span slot="title">
          <app-i18n code="entities.documents.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/document-types')"
                  :route="{ path: '/document-types' }"
                  index="/document-types"
                  v-if="hasPermissionToDocumentTypes"
          >
            <i class="el-icon-fa-file-text"></i>
            <span slot="title">
          <app-i18n code="entities.documentTypes.menu"></app-i18n>
        </span>
          </el-menu-item>

        </el-menu-item-group>
        <el-menu-item-group title="Stores">

          <el-menu-item
                  :class="classFor('/stall')"
                  :route="{ path: '/stall' }"
                  index="/stall"
                  v-if="hasPermissionToStall"
          >
            <i class="el-icon-fa-home"></i>
            <span slot="title">
          <app-i18n code="entities.stall.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/expenses')"
                  :route="{ path: '/expenses' }"
                  index="/expenses"
                  v-if="hasPermissionToExpenses"
          >
            <i class="el-icon-fa-money"></i>
            <span slot="title">
          <app-i18n code="entities.expenses.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/assets')"
                  :route="{ path: '/assets' }"
                  index="/assets"
                  v-if="hasPermissionToAssets"
          >
            <i class="el-icon-fa-deviantart"></i>
            <span slot="title">
          <app-i18n code="entities.assets.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/gift-card')"
                  :route="{ path: '/gift-card' }"
                  index="/gift-card"
                  v-if="hasPermissionToGiftCard"
          >
            <i class="el-icon-fa-id-card"></i>
            <span slot="title">
          <app-i18n code="entities.giftCard.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/coupon')"
                  :route="{ path: '/coupon' }"
                  index="/coupon"
                  v-if="hasPermissionToCoupon"
          >
            <i class="el-icon-fa-code-fork"></i>
            <span slot="title">
          <app-i18n code="entities.coupon.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/register')"
                  :route="{ path: '/register' }"
                  index="/register"
                  v-if="hasPermissionToRegister"
          >
            <i class="el-icon-fa-chevron-right"></i>
            <span slot="title">
          <app-i18n code="entities.register.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/memos')"
                  :route="{ path: '/memos' }"
                  index="/memos"
                  v-if="hasPermissionToMemos"
          >
            <i class="el-icon-fa-newspaper-o"></i>
            <span slot="title">
          <app-i18n code="entities.memos.menu"></app-i18n>
        </span>
          </el-menu-item>

        </el-menu-item-group>

        <el-menu-item-group title="Other">

          <el-menu-item
                  :class="classFor('/todo')"
                  :route="{ path: '/todo' }"
                  index="/todo"
                  v-if="hasPermissionToTodo"
          >
            <i class="el-icon-fa-sticky-note"></i>
            <span slot="title">
          <app-i18n code="entities.todo.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/audit-logs')"
                  :route="{ path: '/audit-logs' }"
                  index="/audit-logs"
                  v-if="hasPermissionToAuditLog"
          >
            <i class="el-icon-fa-clock-o"></i>
            <span slot="title">
          <app-i18n code="auditLog.menu"></app-i18n>
        </span>
          </el-menu-item>

          <el-menu-item
                  :class="classFor('/settings')"
                  :route="{ path: '/settings' }"
                  index="/settings"
                  v-if="hasPermissionToSettings"
          >
            <i class="el-icon-fa-cog"></i>
            <span slot="title">
          <app-i18n code="settings.menu"></app-i18n>
        </span>
          </el-menu-item>
        </el-menu-item-group>

      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <span>Reports</span>
        </template>

        <el-menu-item
                :class="classFor('/device-sessions')"
                :route="{ path: '/device-sessions' }"
                index="/device-sessions"
                v-if="hasPermissionToDeviceSessions"
        >
          <i class="el-icon-fa-chevron-right"></i>
          <span slot="title">
          <app-i18n code="entities.deviceSessions.menu"></app-i18n>
        </span>
        </el-menu-item>

        <el-menu-item
                :class="classFor('/commissions')"
                :route="{ path: '/commissions' }"
                index="/commissions"
                v-if="hasPermissionToCommissions"
        >
          <i class="el-icon-fa-chevron-right"></i>
          <span slot="title">
          <app-i18n code="entities.commissions.menu"></app-i18n>
        </span>
        </el-menu-item>

        <el-menu-item
                :class="classFor('/transactions')"
                :route="{ path: '/transactions' }"
                index="/transactions"
                v-if="hasPermissionToTransactions"
        >
          <i class="el-icon-fa-chevron-right"></i>
          <span slot="title">
          <app-i18n code="entities.transactions.menu"></app-i18n>
        </span>
        </el-menu-item>

      </el-submenu>

    </el-menu>
  </el-aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { SettingsPermissions } from '@/modules/settings/settings-permissions';
import { AuditLogPermissions } from '@/modules/audit-log/audit-log-permissions';
import { IamPermissions } from '@/modules/iam/iam-permissions';
import { CustomersPermissions } from '@/modules/customers/customers-permissions';
import { SuppliersPermissions } from '@/modules/suppliers/suppliers-permissions';
import { StaffPermissions } from '@/modules/staff/staff-permissions';
import { ProductsPermissions } from '@/modules/products/products-permissions';
import { BrandsPermissions } from '@/modules/brands/brands-permissions';
import { CategoriesPermissions } from '@/modules/categories/categories-permissions';
import { ExpensesPermissions } from '@/modules/expenses/expenses-permissions';
import { ExpenseCategoryPermissions } from '@/modules/expense-category/expense-category-permissions';
import { AssetsPermissions } from '@/modules/assets/assets-permissions';
import { DevicesPermissions } from '@/modules/devices/devices-permissions';
import { NoticePermissions } from '@/modules/notice/notice-permissions';
import { SalesPermissions } from '@/modules/sales/sales-permissions';
import { PurchasesPermissions } from '@/modules/purchases/purchases-permissions';
import { ReturnsPermissions } from '@/modules/returns/returns-permissions';
import { StockAdjustmentsPermissions } from '@/modules/stock-adjustments/stock-adjustments-permissions';
import { UnitsPermissions } from '@/modules/units/units-permissions';
import { GiftCardPermissions } from '@/modules/gift-card/gift-card-permissions';
import { CouponPermissions } from '@/modules/coupon/coupon-permissions';
import { DamagesPermissions } from '@/modules/damages/damages-permissions';
import { LeavePermissions } from '@/modules/leave/leave-permissions';
import { LeaveTypePermissions } from '@/modules/leave-type/leave-type-permissions';
import { AllowanceAndDeductionPermissions } from '@/modules/allowance-and-deduction/allowance-and-deduction-permissions';
import { PayrollPermissions } from '@/modules/payroll/payroll-permissions';
import { AttendancePermissions } from '@/modules/attendance/attendance-permissions';
import { TaxClassPermissions } from '@/modules/tax-class/tax-class-permissions';
import { TodoPermissions } from '@/modules/todo/todo-permissions';
import { DocumentsPermissions } from '@/modules/documents/documents-permissions';
import { DocumentTypesPermissions } from '@/modules/document-types/document-types-permissions';
import { MemosPermissions } from '@/modules/memos/memos-permissions';
import { CurrencyPermissions } from '@/modules/currency/currency-permissions';
import { HolidayPermissions } from '@/modules/holiday/holiday-permissions';
import { StallPermissions } from '@/modules/stall/stall-permissions';
import { VariationPermissions } from '@/modules/variation/variation-permissions';
import { ProductLogsPermissions } from '@/modules/product-logs/product-logs-permissions';
import { StockTransferPermissions } from '@/modules/stock-transfer/stock-transfer-permissions';
import { DeviceSessionsPermissions } from '@/modules/device-sessions/device-sessions-permissions';
import { ProductCountPermissions } from '@/modules/product-count/product-count-permissions';
import { ProductValuePermissions } from '@/modules/product-value/product-value-permissions';
import { RegisterPermissions } from '@/modules/register/register-permissions';
import { CommissionsPermissions } from '@/modules/commissions/commissions-permissions';
import { TransactionsPermissions } from '@/modules/transactions/transactions-permissions';
import { PriceChangePermissions } from '@/modules/price-change/price-change-permissions';

export default {
  name: 'app-menu',

  computed: {
    ...mapGetters({
      collapsed: 'layout/menuCollapsed',
      isMobile: 'layout/isMobile',
      currentUser: 'auth/currentUser',
    }),

    hasPermissionToSettings() {
      return new SettingsPermissions(this.currentUser).edit;
    },

    hasPermissionToAuditLog() {
      return new AuditLogPermissions(this.currentUser).read;
    },

    hasPermissionToIam() {
      return new IamPermissions(this.currentUser).read;
    },

    hasPermissionToCustomers() {
      return new CustomersPermissions(this.currentUser).read;
    },
    hasPermissionToSuppliers() {
      return new SuppliersPermissions(this.currentUser).read;
    },
    hasPermissionToStaff() {
      return new StaffPermissions(this.currentUser).read;
    },
    hasPermissionToProducts() {
      return new ProductsPermissions(this.currentUser).read;
    },
    hasPermissionToBrands() {
      return new BrandsPermissions(this.currentUser).read;
    },
    hasPermissionToCategories() {
      return new CategoriesPermissions(this.currentUser).read;
    },
    hasPermissionToExpenses() {
      return new ExpensesPermissions(this.currentUser).read;
    },
    hasPermissionToExpenseCategory() {
      return new ExpenseCategoryPermissions(this.currentUser).read;
    },
    hasPermissionToAssets() {
      return new AssetsPermissions(this.currentUser).read;
    },
    hasPermissionToDevices() {
      return new DevicesPermissions(this.currentUser).read;
    },
    hasPermissionToNotice() {
      return new NoticePermissions(this.currentUser).read;
    },
    hasPermissionToSales() {
      return new SalesPermissions(this.currentUser).read;
    },
    hasPermissionToPurchases() {
      return new PurchasesPermissions(this.currentUser).read;
    },
    hasPermissionToReturns() {
      return new ReturnsPermissions(this.currentUser).read;
    },
    hasPermissionToStockAdjustments() {
      return new StockAdjustmentsPermissions(this.currentUser).read;
    },
    hasPermissionToUnits() {
      return new UnitsPermissions(this.currentUser).read;
    },
    hasPermissionToGiftCard() {
      return new GiftCardPermissions(this.currentUser).read;
    },
    hasPermissionToCoupon() {
      return new CouponPermissions(this.currentUser).read;
    },
    hasPermissionToDamages() {
      return new DamagesPermissions(this.currentUser).read;
    },
    hasPermissionToLeave() {
      return new LeavePermissions(this.currentUser).read;
    },
    hasPermissionToLeaveType() {
      return new LeaveTypePermissions(this.currentUser).read;
    },
    hasPermissionToAllowanceAndDeduction() {
      return new AllowanceAndDeductionPermissions(this.currentUser).read;
    },
    hasPermissionToPayroll() {
      return new PayrollPermissions(this.currentUser).read;
    },
    hasPermissionToAttendance() {
      return new AttendancePermissions(this.currentUser).read;
    },
    hasPermissionToTaxClass() {
      return new TaxClassPermissions(this.currentUser).read;
    },
    hasPermissionToTodo() {
      return new TodoPermissions(this.currentUser).read;
    },
    hasPermissionToDocuments() {
      return new DocumentsPermissions(this.currentUser).read;
    },
    hasPermissionToDocumentTypes() {
      return new DocumentTypesPermissions(this.currentUser).read;
    },
    hasPermissionToMemos() {
      return new MemosPermissions(this.currentUser).read;
    },
    hasPermissionToCurrency() {
      return new CurrencyPermissions(this.currentUser).read;
    },
    hasPermissionToHoliday() {
      return new HolidayPermissions(this.currentUser).read;
    },
    hasPermissionToStall() {
      return new StallPermissions(this.currentUser).read;
    },
    hasPermissionToVariation() {
      return new VariationPermissions(this.currentUser).read;
    },
    hasPermissionToProductLogs() {
      return new ProductLogsPermissions(this.currentUser).read;
    },
    hasPermissionToStockTransfer() {
      return new StockTransferPermissions(this.currentUser).read;
    },
    hasPermissionToDeviceSessions() {
      return new DeviceSessionsPermissions(this.currentUser).read;
    },
    hasPermissionToProductCount() {
      return new ProductCountPermissions(this.currentUser).read;
    },
    hasPermissionToProductValue() {
      return new ProductValuePermissions(this.currentUser).read;
    },
    hasPermissionToRegister() {
      return new RegisterPermissions(this.currentUser).read;
    },
    hasPermissionToCommissions() {
      return new CommissionsPermissions(this.currentUser).read;
    },
    hasPermissionToTransactions() {
      return new TransactionsPermissions(this.currentUser).read;
    },
    hasPermissionToPriceChange() {
      return new PriceChangePermissions(this.currentUser).read;
    },

    asideWidth() {
      if (!this.collapsed) {
        return '250px';
      }

      return '0px';
    },
  },

  methods: {
    ...mapActions({
      collapseMenu: 'layout/collapseMenu',
    }),

    collapseMenuIfMobile() {
      if (this.isMobile) {
        this.collapseMenu();
      }
    },

    classFor(path, exact = false) {
      if (exact) {
        return {
          active: this.$route.path === path,
        };
      }

      const routePath = this.$route.path;
      const active = routePath === path || routePath.startsWith(path + '/');

      return {
        active
      };
    },
  },
};
</script>

<style scoped>
.el-menu.collapsed span {
  visibility: hidden;
}
</style>
