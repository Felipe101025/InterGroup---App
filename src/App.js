import React, { Suspense, lazy, useCallback, useMemo, useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeSection from './components/HomeSection';
import NotificationCenter from './components/NotificationCenter';
import FooterSection from './components/FooterSection';
import FloatingActionButton from './components/FloatingActionButton';

const RegisterPersonForm = lazy(() => import('./components/RegisterPersonForm'));
const ClientLoginModal = lazy(() => import('./components/ClientLoginModal'));
const AdvisorChatModal = lazy(() => import('./components/AdvisorChatModal'));
const WorkWithUsSection = lazy(() => import('./components/WorkWithUsSection'));
const JobApplicationProcess = lazy(() => import('./components/JobApplicationProcess'));
const ClientDashboard = lazy(() => import('./components/ClientDashboard'));
const ElectronicSecurityService = lazy(() => import('./components/ElectronicSecurityService'));
const MobileSecurityService = lazy(() => import('./components/MobileSecurityService'));
const EscoltaVipService = lazy(() => import('./components/EscoltaVipService'));
const EscoltaPorHorasService = lazy(() => import('./components/EscoltaPorHorasService'));
const SupervisionAliadaService = lazy(() => import('./components/SupervisionAliadaService'));
const EmployeeLoginModal = lazy(() => import('./components/EmployeeLoginModal'));
const EmployeeDashboard = lazy(() => import('./components/EmployeeDashboard'));
const DocumentUploadOptions = lazy(() => import('./components/DocumentUploadOptions'));
const MonthlyBenefitsUpload = lazy(() => import('./components/MonthlyBenefitsUpload'));
const PreIngressTraining = lazy(() => import('./components/PreIngressTraining'));
const VigilanteTrainingModules = lazy(() => import('./components/VigilanteTrainingModules'));

const PageFallback = ({ message = 'Cargando...' }) => (
  <div className="flex items-center justify-center py-16">
    <span className="text-gray-600 text-sm font-medium">{message}</span>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showEmployeeLoginModal, setShowEmployeeLoginModal] = useState(false);
  const [showAdvisorChat, setShowAdvisorChat] = useState(false);
  const [selectedJobPosition, setSelectedJobPosition] = useState(null);
  const [loggedInClient, setLoggedInClient] = useState(null);
  const [loggedInEmployee, setLoggedInEmployee] = useState(null);

  const isClientLoggedIn = Boolean(loggedInClient);
  const isEmployeeLoggedIn = Boolean(loggedInEmployee);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    setShowLoginModal(false);
    setShowEmployeeLoginModal(false);
    setShowAdvisorChat(false);
    setSelectedJobPosition(null);
  }, []);

  const handleLoginClick = useCallback(() => {
    setShowLoginModal(true);
  }, []);

  const handleLoginSuccess = useCallback((username) => {
    setShowLoginModal(false);
    if (username) {
      setLoggedInClient(username);
      setCurrentPage('clientDashboard');
    }
  }, []);

  const handleEmployeeLoginClick = useCallback(() => {
    setShowEmployeeLoginModal(true);
  }, []);

  const handleEmployeeLoginSuccess = useCallback((username) => {
    setShowEmployeeLoginModal(false);
    if (username) {
      setLoggedInEmployee(username);
      setCurrentPage('employeeDashboard');
    }
  }, []);

  const handleContactAdvisor = useCallback(() => {
    setShowAdvisorChat(true);
  }, []);

  const closeAdvisorChat = useCallback(() => {
    setShowAdvisorChat(false);
  }, []);

  const handleWorkWithUsClick = useCallback(() => {
    navigateTo('workWithUs');
  }, [navigateTo]);

  const handleSelectJobPosition = useCallback((position) => {
    setSelectedJobPosition(position);
    setCurrentPage('jobApplication');
  }, []);

  const handleBackToVacancies = useCallback(() => {
    setSelectedJobPosition(null);
    navigateTo('workWithUs');
  }, [navigateTo]);

  const handleSelectClientService = useCallback((serviceId) => {
    setCurrentPage(serviceId);
  }, []);

  const handleEmployeeDashboardOption = useCallback((optionId) => {
    if (optionId === 'cargaDocumentos') {
      setCurrentPage('documentUploadOptions');
    } else if (optionId === 'capacitacionPreIngreso') {
      setCurrentPage('preIngressTraining');
    } else {
      alert(`Opción de empleado: ${optionId} (simulado)`);
    }
  }, []);

  const handleSelectUploadType = useCallback((typeId) => {
    if (typeId === 'documentosMensualesBeneficios') {
      setCurrentPage('monthlyBenefitsUpload');
    } else {
      alert(`Carga de ${typeId} (simulado)`);
      setCurrentPage('documentUploadOptions');
    }
  }, []);

  const handleSelectTrainingProfile = useCallback((profileId) => {
    if (profileId === 'vigilantes') {
      setCurrentPage('vigilanteTrainingModules');
    } else {
      alert(`Módulos de capacitación para ${profileId} (simulado)`);
      setCurrentPage('preIngressTraining');
    }
  }, []);

  const goToEmployeeDashboard = useCallback(() => {
    setCurrentPage('employeeDashboard');
  }, []);

  const goToDocumentUploadOptions = useCallback(() => {
    setCurrentPage('documentUploadOptions');
  }, []);

  const goToPreIngressTraining = useCallback(() => {
    setCurrentPage('preIngressTraining');
  }, []);

  const floatingButtonIcon = useMemo(
    () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </svg>
    ),
    []
  );

  const renderMainContent = () => {
    if (!isClientLoggedIn && !isEmployeeLoggedIn && currentPage === 'home') {
      return (
        <HomeSection
          onLoginClick={handleLoginClick}
          onWorkWithUsClick={handleWorkWithUsClick}
          onEmployeeLoginClick={handleEmployeeLoginClick}
        />
      );
    }

    if (currentPage === 'register') {
      return <RegisterPersonForm />;
    }

    if (currentPage === 'workWithUs') {
      return <WorkWithUsSection onSelectPosition={handleSelectJobPosition} />;
    }

    if (currentPage === 'jobApplication') {
      return (
        <JobApplicationProcess
          position={selectedJobPosition}
          onBack={handleBackToVacancies}
        />
      );
    }

    if (isClientLoggedIn) {
      switch (currentPage) {
        case 'clientDashboard':
          return <ClientDashboard onSelectService={handleSelectClientService} />;
        case 'seguridadElectronica':
          return <ElectronicSecurityService onContactAdvisor={handleContactAdvisor} />;
        case 'seguridadMobile':
          return <MobileSecurityService onSelectMobileService={handleSelectClientService} />;
        case 'escoltaVip':
          return <EscoltaVipService onContactAdvisor={handleContactAdvisor} />;
        case 'escoltaPorHoras':
          return <EscoltaPorHorasService onContactAdvisor={handleContactAdvisor} />;
        case 'supervisionAliada':
          return <SupervisionAliadaService />;
        default:
          return null;
      }
    }

    if (isEmployeeLoggedIn) {
      switch (currentPage) {
        case 'employeeDashboard':
          return <EmployeeDashboard onSelectOption={handleEmployeeDashboardOption} />;
        case 'documentUploadOptions':
          return (
            <DocumentUploadOptions
              onSelectUploadType={handleSelectUploadType}
              onBack={goToEmployeeDashboard}
            />
          );
        case 'monthlyBenefitsUpload':
          return <MonthlyBenefitsUpload onBack={goToDocumentUploadOptions} />;
        case 'preIngressTraining':
          return (
            <PreIngressTraining
              onSelectProfile={handleSelectTrainingProfile}
              onBack={goToEmployeeDashboard}
            />
          );
        case 'vigilanteTrainingModules':
          return <VigilanteTrainingModules onBack={goToPreIngressTraining} />;
        default:
          return null;
      }
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <LayoutHeader onNavigate={navigateTo} currentPage={currentPage} />

      <main className="flex-grow">
        <Suspense fallback={<PageFallback message="Cargando sección..." />}>
          {renderMainContent()}
        </Suspense>
      </main>

      <NotificationCenter />

      {showLoginModal && (
        <Suspense fallback={null}>
          <ClientLoginModal onClose={handleLoginSuccess} />
        </Suspense>
      )}
      {showEmployeeLoginModal && (
        <Suspense fallback={null}>
          <EmployeeLoginModal onClose={handleEmployeeLoginSuccess} />
        </Suspense>
      )}
      {showAdvisorChat && (
        <Suspense fallback={null}>
          <AdvisorChatModal onClose={closeAdvisorChat} />
        </Suspense>
      )}

      <FloatingActionButton
        onClick={handleContactAdvisor}
        label="Contactar Asesora"
        icon={floatingButtonIcon}
      />

      <FooterSection />
    </div>
  );
};

export default App;