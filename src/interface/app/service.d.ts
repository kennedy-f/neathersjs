interface Service {
  name: string;
  // model: () => any;
  model: (fun:any) => any;
} 

export default Service;
