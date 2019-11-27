import storage from 'app/services/Firebase';

export const uploadImage = async image => {
  try {
    const imageRef = storage.ref(`images/${image.name}`);
    const uploadSnapShot = await imageRef.put(image);
    const downloadUrl = await uploadSnapShot.ref.getDownloadURL();
    return downloadUrl;
  } catch (err) {
    console.log(err);
  }
};
