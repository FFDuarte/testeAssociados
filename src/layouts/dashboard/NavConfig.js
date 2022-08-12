// component
import Iconify from '../../components/Iconify';
// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;




const TenantConfig = [
 
  {
    title: 'Associados',
    path: '/dashboard/associados',
    icon: getIcon('eva:people-fill'),
  },

];

const AdminConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Clientes',
   
    icon: getIcon('eva:pie-chart-2-fill'),
  },

  {
    title: 'Associados',
    path: '/dashboard/associados',
    icon: getIcon('eva:people-fill'),
  },

];



export default TenantConfig;
