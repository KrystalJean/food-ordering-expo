import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { Product } from '@/src/types';

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultPizzaImage}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '50%', //should equal 100 divided by numOfColums(in FlatList inside index)
    backgroundColor: '#fff',
    padding: 10, 
    borderRadius: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 1
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
});
