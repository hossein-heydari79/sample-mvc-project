const _AddData = (data) => {
  MyStorage.push(data);
  console.log(MyStorage);
  return;
};

const _DeleteData = (id) => {
  MyStorage = MyStorage.filter((item) => item.id != id);
  return;
};

const _EditData = (id, UpdateData) => {
  let oldData = MyStorage.find((item) => item.id == id);
  MyStorage = MyStorage.filter((item) => item.id != id);

  oldData = { ...oldData, ...UpdateData };
  _AddData(oldData);

  return;
};
