import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export default useImageDimensions = () => {
  const [imageDimensions, setImageDimensions] = useState({});
  useEffect(() => {
    const windowObject = Dimensions.get('window');
    const ratio = windowObject.width / 541;

    setImageDimensions({
      height: 362 * ratio,
      width: windowObject.width,
    });
  }, []);

  return {
    imageDimensions
  };
}