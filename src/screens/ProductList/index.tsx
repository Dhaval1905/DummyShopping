import React, {useEffect, useState} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import Input from '../../components/Input';
import {strings} from '../../constant/String';
import {colors} from '../../theme/colors';
import Card from '../../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductList} from '../../redux/Actions/productlistAction';
import {IStore} from '../../redux/Reducers';

const ProductList = () => {
  const {productList, isLoading} = useSelector(
    (state: IStore) => state.productListReducer,
  );
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(10);
  const [loadData, setLoadData] = useState([]);
  const dispatch = useDispatch();

  const fetchAllProducts = async () => {
    let response = await dispatch<any>(fetchProductList());
    console.log();
    setLoadData(response.payload.data.slice(0, page));
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const onEnd = async () => {
    if (page <= productList.data.length) {
      const nNage = page + 10;
      let allData = [...loadData, ...productList?.data?.slice(page, nNage)];
      setLoadData(allData);
      setPage(nNage);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/images/drawer.png')}
            style={styles.img}
          />
          <View style={styles.input}>
            <Input
              value={search}
              onChage={(text: string) => setSearch(text)}
              height={50}
              placeholder={strings['Search product']}
              placeholderTextColor={colors.lightgrey}
            />
          </View>
        </View>
        <View style={{...styles.row, marginTop: '5%'}}>
          <View>
            <Text style={styles.headerTxt}>{strings.Sneakers}</Text>
            <Text style={styles.subHeaderTxt}>
              {productList?.data?.length} {strings['product found']}
            </Text>
          </View>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/up.png')}
              style={styles.img}
              resizeMode="contain"
            />
            <View style={{width: '4%'}} />
            <Image
              source={require('../../assets/images/filter.png')}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
        </View>
        <FlatList
          data={loadData}
          renderItem={({item, index}) => (
            <Card
              key={index.toString()}
              productTitle={item?.category}
              productImage={item?.image}
              productDesc={item?.title}
              price={item?.price}
            />
          )}
          keyExtractor={item => item?.id}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '25%'}}
          initialNumToRender={10}
          onEndReached={() => onEnd()}
          onEndReachedThreshold={0.09}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
