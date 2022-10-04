import { FeatureSchemaDefinition } from "../types";
import neupassAdvantage from "./advantage";
import neupassGroup from "./neupassGroup";
import enrollmentFooter from "./enrollmentFooter";
import brandsList from "./brandsList";
import successModal from "./successModal";
import neupassCreditLine from "./neupassCreditLine";
import neupassDashboardBenefits from "./neupassDashboardBenefits";
import actionFooter from "./actionFooter";
import acceleratorHeader from "./acceleratorHeader";

export const neuPass: FeatureSchemaDefinition = {
  pageItems: [
    { type: "neupass.advantage" },
    { type: "neupass.group" },
    { type: "neupass.successModal" },
    { type: "neupass.enrollmentFooter" },
    { type: "neupass.dashboard.benefits" },
  ],
  connectedStores: [
    {
      value: "neupass.subscription.store",
      title: "[Neupass] Subscription Store",
    },
    {
      value: "neupass.loyalty.store",
      title: "[Neupass] Loyalty Store",
    },
    {
      value: "neupass.member.store",
      title: "[Neupass] Member Store",
    },
    {
      value: "neupass.credit.store",
      title: "[Neupass] Credit Store (Credit Line, NeuCard, Credit Score)",
    },
    {
      value: "neupass.benefits.store",
      title: "[Neupass] Benefits Store",
    },
    {
      value: "neupass.dashboardBenefits.store",
      title: "[Neupass] Dashboard Benefits Store",
    },
    {
      value: "neupass.benefitDetail.store",
      title: "[Neupass] Benefit Detail Store",
    },
    {
      value: "neupass.enrollment.store",
      title: "[Neupass] Enrollment store",
    },
    {
      value: "neupass.ledger.store",
      title: "[Neupass] Ledger store",
    },
    {
      value: "neupass.savings.store",
      title: "[Neupass] Savings store",
    },
    {
      value: "neupass.benefit.transactionHistory.store",
      title: "[Neupass] Benefit Transaction History Store",
    },
    {
      value: "neupass.subscription.tierDetails.store",
      title: "[Neupass] Subscription Tier Details Store",
    },
  ],
  groupItems: [
    { type: "neupass.creditLine" },
    { type: "neupass.group" },
    { type: "neupass.dashboard.benefits" },
  ],
  footers: [{ type: "neupass.actionFooter" }],
  headers: [{ type: "neupass.acceleratorHeader" }],
  schemas: [
    neupassAdvantage,
    neupassGroup,
    enrollmentFooter,
    brandsList,
    neupassCreditLine,
    successModal,
    neupassDashboardBenefits,
    acceleratorHeader,
    actionFooter,
  ],
  variants: {
    placeholder: [
      {
        value: "neupass.benefits.category",
        title: "[Neu Pass] Benefits Category",
      },
      {
        value: "neupass.benefits.listing",
        title: "[Neu Pass] Benefits Listing",
      },
      {
        value: "neupass.benefits.utilization",
        title: "[Neu Pass] Benefits Utilization",
      },
      {
        value: "neupass.benefits.keyPoints",
        title: "[Neu Pass] Benefits Key Points",
      },
      {
        value: "neupass.benefits.faqs",
        title: "[Neu Pass] Benefits FAQs",
      },
      {
        value: "neupass.subscription.brandListing",
        title: "[Neu Pass] Subscription Brand Listing",
      },
      {
        value: "neupass.subscription.addons",
        title: "[Neu Pass] Add Ons",
      },
      {
        value: "neupass.neupassSuperSubscriptions",
        title: "[Neu Pass] NeuPass Super Subscriptions View",
      },
      {
        value: "neupass.neupassBenefits",
        title: "[Neu Pass] NeuPass Benefits View",
      },
      {
        value: "neupass.singleWallet.neuCoins",
        title: "[Neu Pass] Single Wallet NeuCoins",
      },
      {
        value: "neupass.brandBanner",
        title: "[Neu Pass] Brand Banner",
      },
      {
        value: "neupass.filtered-brand-list",
        title: "[Neu Pass] Filtered Brand List",
      },
      {
        value: "neupass.neucoins-status",
        title: "[Neu Pass] NeuCoins Status",
      },
      {
        value: "neupass.neucoins-redeemed",
        title: "[Neu Pass] NeuCoins Redeemed",
      },
      {
        value: "neupass.brand-shipping",
        title: "[Neu Pass] NeuPass Brand Shipping",
      },
      {
        value: "neupass.benefit-utilised",
        title: "[Neu Pass] NeuPass Benefit Utilised",
      },
      {
        value: "neupass.credit-line-status",
        title: "[Neu Pass] Credit Line Status",
      },
      {
        value: "neupass.status-header",
        title: "[Neu Pass] Status Header",
      },
      {
        value: "neupass.subscription.tierTimeline",
        title: "[Neu Pass] Subscription tier timeline",
      },
    ],
    group: [
      {
        value: "carousel-neupass",
        title: "[NeuPass] Benefits Card Carousel",
      },
      {
        value: "neupass.subscriptions.carousel",
        title: "[NeuPass] Super Subscriptions",
      },
      {
        value: "neupass-default-padding",
        title: "[Neupass] Default Padding",
      },
    ],
    card: [
      { title: "Neupass Credit Score", value: "neupass.creditScore" },
      { title: "Neupass Accelerator", value: "neupass.accelerator" },
      { title: "Neupass Credit Card", value: "neupass.creditCard" },
      {
        title: " Neupass Left Aligned Image Card",
        value: "neupass.card-img-left",
      },
    ],
    navigation: [
      { title: "NeuPass", value: "neupass" },
      { title: "NeuPass Benefits", value: "neupass.benefits.landing" },
      {
        title: "NeuPass Benefit Details",
        value: "neupass.benefits.details.landing",
      },
      { title: "NeuPass Subscriptions", value: "neupass.subscription.landing" },
    ],
    nudge: [
      {
        title: "[NeuPass] Benefit Detail Nudge",
        value: "neupass.benefits.details",
      },
      {
        title: "[NeuPass] Locked Benefit Detail Nudge",
        value: "neupass.locked.benefit.detail.nudge",
      },
      { title: "[NeuPass] Loyalty Nudge", value: "neupass.loyalty" },
      { title: "[NeuPass] Subscription Nudge", value: "neupass.subscription" },

      { title: "[NeuPass] Neucoin Nudge", value: "neupass.neucoin" },
      { title: "[NeuPass] NeuPass Optout Nudge", value: "neupass.optOutNudge" },
      {
        title: "[NeuPass] Savings Nudge",
        value: "neupass.savings",
      },
      {
        title: "[Neu Pass] NeuPass Benefit Transaction History",
        value: "neupass.benefit.transactionHistory",
      },
      {
        title: "[NeuPass] NeuPass Total Savings",
        value: "neupass.totalSavings",
      },
      {
        title: "[NeuPass] Savings Redeemed Nudge",
        value: "neupass.savings-redeemed.nudge",
      },
    ],
    dialog: [],
    ifElseBlock: [
      { title: "[Neupass] Credit Score Widget", value: "neupass.credit-score" },
      { title: "[Neupass] Credit Card", value: "neupass.credit-card" },
      { title: "[Neupass] Know More CTA", value: "neupass.know-more-cta" },
      { title: "[Neupass] Savings Widget", value: "neupass.savings-widget" },
    ],
    switchCaseBlock: [
      { title: "[Neupass] Credit Line", value: "neupass.credit-line" },
      { title: "[Neupass] Neu Card", value: "neupass.neu-card" },
      { title: "[Neupass] Credit Score", value: "neupass.credit-score" },
      {
        title: "[Neupass] Locked Benefit Detail",
        value: "neupass.locked.benefit.detail",
      },
      {
        title: "[Neupass] Neupass Dashboard My Credit",
        value: "neupass.dashboard.myCredit",
      },
      {
        title: "[Neupass] User Credit Status",
        value: "neupass.user-credit-status",
      },
    ],
  },
};
