import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ResultsPage } from './pages/ResultsPage';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { EmailVerification } from './pages/EmailVerification';
import { RoleSelection } from './pages/RoleSelection';
import { CustomerOnboarding } from './pages/CustomerOnboarding';
import { VendorOnboarding } from './pages/VendorOnboarding';
import { ForgotPassword } from './pages/ForgotPassword';
import { ResetPassword } from './pages/ResetPassword';
import { Preferences } from './pages/Preferences';
import { OnboardingComplete } from './pages/OnboardingComplete';

// Customer Module
import { CustomerLayout } from './layouts/CustomerLayout';
import { Dashboard } from './pages/customer/Dashboard';
import { Events } from './pages/customer/Events';
import { CreateEvent } from './pages/customer/CreateEvent';
import { EventOverview } from './pages/customer/EventOverview';
import { Guests } from './pages/customer/Guests';
import { AddGuests } from './pages/customer/AddGuests';
import { VendorMarketplace } from './pages/customer/VendorMarketplace';
import { VendorProfile } from './pages/customer/VendorProfile';
import { PostRequirement } from './pages/customer/PostRequirement';
import { RequirementDetails } from './pages/customer/RequirementDetails';
import { BidsList as CustomerBidsList } from './pages/customer/BidsList';
import { BidComparison } from './pages/customer/BidComparison';
import { Messages } from './pages/customer/Messages';
import { ChatDetail } from './pages/customer/ChatDetail';
import { Agreements } from './pages/customer/Agreements';
import { AgreementViewer } from './pages/customer/AgreementViewer';
import { Notifications } from './pages/customer/Notifications';
import { Settings } from './pages/customer/Settings';
import { Vendors } from './pages/customer/Vendors';

// Admin Module
import { AdminLayout } from './layouts/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { CustomersList } from './pages/admin/CustomersList';
import { CustomerDetail } from './pages/admin/CustomerDetail';
import { VendorsList } from './pages/admin/VendorsList';
import { VendorDetail } from './pages/admin/VendorDetail';
import { RequirementsList } from './pages/admin/RequirementsList';
import { BidsList } from './pages/admin/BidsList';
import { DisputesList } from './pages/admin/DisputesList';
import { DisputeDetail } from './pages/admin/DisputeDetail';
import { AgreementsList } from './pages/admin/AgreementsList';
import { FinancialDashboard } from './pages/admin/FinancialDashboard';
import { ReportsDashboard } from './pages/admin/ReportsDashboard';
import { SupportTickets } from './pages/admin/SupportTickets';
import { SystemSettings } from './pages/admin/SystemSettings';
import  CategoryManager  from './pages/admin/CategoryManager';

// Vendor Module
import { VendorLayout } from './layouts/VendorLayout';
import { VendorDashboard as VendorDashboardPage } from './pages/vendor/VendorDashboard';
import { RequirementsFeed } from './pages/vendor/RequirementsFeed';
import { RequirementDetail } from './pages/vendor/RequirementDetail';
import { PlaceBid } from './pages/vendor/PlaceBid';
import { MyBids } from './pages/vendor/MyBids';
import { AwardedEvents } from './pages/vendor/AwardedEvents';
import { EventDetail } from './pages/vendor/EventDetail';
import { VendorMessages } from './pages/vendor/VendorMessages';
import { Deliverables } from './pages/vendor/Deliverables';
import { Earnings } from './pages/vendor/Earnings';
import { VendorProfile as VendorProfilePage } from './pages/vendor/VendorProfile';
import { VendorAvailability } from './pages/vendor/VendorAvailability';
import { VendorSettings } from './pages/vendor/VendorSettings';

// Error Boundary
import { RouteErrorElement } from './components/ErrorBoundary';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/results',
    Component: ResultsPage,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/signup',
    Component: SignUp,
  },
  {
    path: '/email-verification',
    Component: EmailVerification,
  },
  {
    path: '/role-selection',
    Component: RoleSelection,
  },
  {
    path: '/customer-onboarding',
    Component: CustomerOnboarding,
  },
  {
    path: '/vendor-onboarding',
    Component: VendorOnboarding,
  },
  {
    path: '/forgot-password',
    Component: ForgotPassword,
  },
  {
    path: '/reset-password',
    Component: ResetPassword,
  },
  {
    path: '/preferences',
    Component: Preferences,
  },
  {
    path: '/onboarding-complete',
    Component: OnboardingComplete,
  },
  {
    path: '/customer',
    Component: CustomerLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: 'dashboard',
        Component: Dashboard,
      },
      {
        path: 'events',
        Component: Events,
      },
      {
        path: 'events/create',
        Component: CreateEvent,
      },
      {
        path: 'events/:id',
        Component: EventOverview,
      },
      {
        path: 'guests',
        Component: Guests,
      },
      {
        path: 'guests/add',
        Component: AddGuests,
      },
      {
        path: 'vendors',
        Component: Vendors,
      },
      {
        path: 'vendors/marketplace',
        Component: VendorMarketplace,
      },
      {
        path: 'vendors/:id',
        Component: VendorProfile,
      },
      {
        path: 'vendors/post-requirement',
        Component: PostRequirement,
      },
      {
        path: 'requirements/:id',
        Component: RequirementDetails,
      },
      {
        path: 'requirements/:id/bids',
        Component: CustomerBidsList,
      },
      {
        path: 'requirements/:id/compare',
        Component: BidComparison,
      },
      {
        path: 'messages',
        Component: Messages,
      },
      {
        path: 'messages/:id',
        Component: ChatDetail,
      },
      {
        path: 'agreements',
        Component: Agreements,
      },
      {
        path: 'agreements/:id',
        Component: AgreementViewer,
      },
      {
        path: 'notifications',
        Component: Notifications,
      },
      {
        path: 'settings',
        Component: Settings,
      },
    ],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AdminDashboard,
      },
      {
        path: 'dashboard',
        Component: AdminDashboard,
      },
      {
        path: 'users',
        Component: CustomersList,
      },
      {
        path: 'users/:id',
        Component: CustomerDetail,
      },
      {
        path: 'vendors',
        Component: VendorsList,
      },
      {
        path: 'vendors/:id',
        Component: VendorDetail,
      },
      {
        path: 'requirements',
        Component: RequirementsList,
      },
      {
        path: 'requirements/:id',
        Component: RequirementDetails,
      },
      {
        path: 'bids',
        Component: BidsList,
      },
      {
        path: 'disputes',
        Component: DisputesList,
      },
      {
        path: 'disputes/:id',
        Component: DisputeDetail,
      },
      {
        path: 'agreements',
        Component: AgreementsList,
      },
      {
        path: 'agreements/:id',
        Component: AgreementViewer,
      },
      {
        path: 'financial',
        Component: FinancialDashboard,
      },
      {
        path: 'reports',
        Component: ReportsDashboard,
      },
      {
        path: 'support',
        Component: SupportTickets,
      },
      {
        path: 'settings',
        Component: SystemSettings,
      },
      {
        path: 'category',
        Component: CategoryManager,
      },
    ],
  },
  {
    path: '/vendor',
    Component: VendorLayout,
    children: [
      {
        index: true,
        Component: VendorDashboardPage,
      },
      {
        path: 'dashboard',
        Component: VendorDashboardPage,
      },
      {
        path: 'requirements',
        Component: RequirementsFeed,
      },
      {
        path: 'requirements/:id',
        Component: RequirementDetail,
      },
      {
        path: 'requirements/:id/place-bid',
        Component: PlaceBid,
      },
      {
        path: 'bids',
        Component: MyBids,
      },
      {
        path: 'bids/:id/edit',
        Component: PlaceBid,
      },
      {
        path: 'events',
        Component: AwardedEvents,
      },
      {
        path: 'events/:id',
        Component: EventDetail,
      },
      {
        path: 'messages',
        Component: VendorMessages,
      },
      {
        path: 'deliverables',
        Component: Deliverables,
      },
      {
        path: 'earnings',
        Component: Earnings,
      },
      {
        path: 'profile',
        Component: VendorProfilePage,
      },
      {
        path: 'availability',
        Component: VendorAvailability,
      },
      {
        path: 'settings',
        Component: VendorSettings,
      },
    ],
  },
  {
    path: '*',
    Component: RouteErrorElement,
  },
]);