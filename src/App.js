import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import HomeSection from './components/HomeSection';
import RegisterPersonForm from './components/RegisterPersonForm';
import ClientLoginModal from './components/ClientLoginModal';
import NotificationCenter from './components/NotificationCenter';
import AdvisorChatModal from './components/AdvisorChatModal';
import FooterSection from './components/FooterSection';
import FloatingActionButton from './components/FloatingActionButton';
import WorkWithUsSection from './components/WorkWithUsSection';
import JobApplicationProcess from './components/JobApplicationProcess';
import ClientDashboard from './components/ClientDashboard';
import ElectronicSecurityService from './components/ElectronicSecurityService';
import MobileSecurityService from './components/MobileSecurityService';
import EscoltaVipService from './components/EscoltaVipService';
import EscoltaPorHorasService from './components/EscoltaPorHorasService';
import SupervisionAliadaService from './components/SupervisionAliadaService';
import EmployeeLoginModal from './components/EmployeeLoginModal';
import EmployeeDashboard from './components/EmployeeDashboard';
import DocumentUploadOptions from './components/DocumentUploadOptions';
import MonthlyBenefitsUpload from './components/MonthlyBenefitsUpload';
import PreIngressTraining from './components/PreIngressTraining';
import VigilanteTrainingModules from './components/VigilanteTrainingModules';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showEmployeeLoginModal, setShowEmployeeLoginModal] = useState(false);
  const [showAdvisorChat, setShowAdvisorChat] = useState(false);
  const [selectedJobPosition, setSelectedJobPosition] = useState(null);
  const [loggedInClient, setLoggedInClient] = useState(null);
  const [loggedInEmployee, setLoggedInEmployee] = useState(null);
  const [selectedClientService, setSelectedClientService] = useState(null);
  const [selectedEmployeeUploadType, setSelectedEmployeeUploadType] = useState(null);
  const [selectedTrainingProfile, setSelectedTrainingProfile] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setShowLoginModal(false);
    setShowEmployeeLoginModal(false);
    setShowAdvisorChat(false);
    setSelectedJobPosition(null);
    setSelectedClientService(null);
    setSelectedEmployeeUploadType(null);
    setSelectedTrainingProfile(null);
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleLoginSuccess = (username) => {
    setShowLoginModal(false);
    setLoggedInClient(username);
    setCurrentPage('clientDashboard');
  };

  const handleEmployeeLoginClick = () => {
    setShowEmployeeLoginModal(true);
  };

  const handleEmployeeLoginSuccess = (username) => {
    setShowEmployeeLoginModal(false);
    if (username) {
      setLoggedInEmployee(username);
      setCurrentPage('employeeDashboard');
    }
  };

  const handleContactAdvisor = () => {
    setShowAdvisorChat(true);
  };

  const handleWorkWithUsClick = () => {
    navigateTo('workWithUs');
  };

  const handleSelectJobPosition = (position) => {
    setSelectedJobPosition(position);
    setCurrentPage('jobApplication');
  };

  const handleBackToVacancies = () => {
    setSelectedJobPosition(null);
    navigateTo('workWithUs');
  };

  const handleSelectClientService = (serviceId) => {
    setSelectedClientService(serviceId);
    setCurrentPage(serviceId);
  };

  const handleEmployeeDashboardOption = (optionId) => {
    if (optionId === 'cargaDocumentos') {
      setCurrentPage('documentUploadOptions');
    } else if (optionId === 'capacitacionPreIngreso') {
      setCurrentPage('preIngressTraining');
    } else {
      alert(`Opción de empleado: ${optionId} (simulado)`);
    }
  };

  const handleSelectUploadType = (typeId) => {
    setSelectedEmployeeUploadType(typeId);
    if (typeId === 'documentosMensualesBeneficios') {
      setCurrentPage('monthlyBenefitsUpload');
    } else {
      alert(`Carga de ${typeId} (simulado)`);
      setCurrentPage('documentUploadOptions');
    }
  };

  const handleSelectTrainingProfile = (profileId) => {
    setSelectedTrainingProfile(profileId);
    if (profileId === 'vigilantes') {
      setCurrentPage('vigilanteTrainingModules');
    } else {
      alert(`Módulos de capacitación para ${profileId} (simulado)`);
      setCurrentPage('preIngressTraining');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <LayoutHeader onNavigate={navigateTo} currentPage={currentPage} />

      <main className="flex-grow">
        {currentPage === 'home' && !loggedInClient && !loggedInEmployee && (
          <HomeSection 
            onLoginClick={handleLoginClick} 
            onWorkWithUsClick={handleWorkWithUsClick} 
            onEmployeeLoginClick={handleEmployeeLoginClick}
          />
        )}

        {loggedInClient && currentPage === 'clientDashboard' && (
          <ClientDashboard onSelectService={handleSelectClientService} />
        )}
        {loggedInClient && currentPage === 'seguridadElectronica' && (
          <ElectronicSecurityService onContactAdvisor={handleContactAdvisor} />
        )}
        {loggedInClient && currentPage === 'seguridadMobile' && (
          <MobileSecurityService onSelectMobileService={handleSelectClientService} />
        )}
        {loggedInClient && currentPage === 'escoltaVip' && (
          <EscoltaVipService onContactAdvisor={handleContactAdvisor} />
        )}
        {loggedInClient && currentPage === 'escoltaPorHoras' && (
          <EscoltaPorHorasService onContactAdvisor={handleContactAdvisor} />
        )}
        {loggedInClient && currentPage === 'supervisionAliada' && (
          <SupervisionAliadaService />
        )}

        {loggedInEmployee && currentPage === 'employeeDashboard' && (
          <EmployeeDashboard onSelectOption={handleEmployeeDashboardOption} />
        )}
        {loggedInEmployee && currentPage === 'documentUploadOptions' && (
          <DocumentUploadOptions onSelectUploadType={handleSelectUploadType} onBack={() => setCurrentPage('employeeDashboard')} />
        )}
        {loggedInEmployee && currentPage === 'monthlyBenefitsUpload' && (
          <MonthlyBenefitsUpload onBack={() => setCurrentPage('documentUploadOptions')} />
        )}
        {loggedInEmployee && currentPage === 'preIngressTraining' && (
          <PreIngressTraining onSelectProfile={handleSelectTrainingProfile} onBack={() => setCurrentPage('employeeDashboard')} />
        )}
        {loggedInEmployee && currentPage === 'vigilanteTrainingModules' && (
          <VigilanteTrainingModules onBack={() => setCurrentPage('preIngressTraining')} />
        )}

        {currentPage === 'register' && <RegisterPersonForm />}
        {currentPage === 'workWithUs' && (
          <WorkWithUsSection onSelectPosition={handleSelectJobPosition} />
        )}
        {currentPage === 'jobApplication' && (
          <JobApplicationProcess 
            position={selectedJobPosition} 
            onBack={handleBackToVacancies} 
          />
        )}
      </main>

      <NotificationCenter />

      {showLoginModal && <ClientLoginModal onClose={handleLoginSuccess} />}
      {showEmployeeLoginModal && <EmployeeLoginModal onClose={handleEmployeeLoginSuccess} />}
      {showAdvisorChat && <AdvisorChatModal onClose={() => setShowAdvisorChat(false)} />}

      <FloatingActionButton
        onClick={() => setShowAdvisorChat(true)}
        label="Contactar Asesora"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        }
      />

      <FooterSection />
    </div>
  );
};

export default App;