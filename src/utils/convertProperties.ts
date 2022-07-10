type TargetObjectType = {
  [key: string]: any;
};

const convertProperties = (exchanger: any, targetObject: TargetObjectType) => {
  const convertedObject = Object.entries(targetObject).map(([key, value]) => {
    const isKeyExistInExchanger = Object.hasOwnProperty.call(exchanger, key);
    return isKeyExistInExchanger ? [exchanger[key as keyof typeof exchanger], value] : [key, value];
  });

  return Object.fromEntries(convertedObject);
};

export const convertPropertiesFromApi = (targetObject: TargetObjectType) => {
  const exchanger = {
    _id: 'id',
  };

  return convertProperties(exchanger, targetObject);
};
