import Service from '../../interface/app/service';

const User = (): Service => {
  const ServiceConfig: Service = {
    name: 'user',
    model: () => {
      console.log('aceitou cara');
    },
  };

  return ServiceConfig;
};

export default User();
