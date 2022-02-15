import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://image.shutterstock.com/image-vector/home-icon-symbol-vector-isolated-260nw-1821887381.jpg',
        inactive:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKmfEmOxO47yi06iwT00ANqk6L9kbus7r7Q&usqp=CAU'

    },
    {
      name: 'Search',
      active: 'https://icomoon.io/iconsabf18a1/0/802.png',
      inactive:'https://www.nicepng.com/png/detail/363-3630378_google-web-search-icon-search-icon-website.png',

  },
 
{
  name: 'Post',
  active: 'https://static.vecteezy.com/ti/vecteur-libre/t2/2205854-icone-de-vecteur-de-courrier-electronique-gratuit-vectoriel.jpg',
  inactive:'https://iconape.com/wp-content/files/en/340044/png/mail-post-symbol-logo.png',

},
{
  name: 'Profile',
  active: 'https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png',
  inactive:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxRmtLsU8I4ohjRvi551NTIRTnfjvfEXX-9eA2oNqpLgVftgj--5dVt7CxOzwoIa2Eso&usqp=CAU',

},
    
]
const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab ] = useState('Home')

  const Icon = ({ icon }) =>(
    <TouchableOpacity onPress={() => setActiveTab(icon.name )}>
      <Image  
      source={{ uri: activeTab == icon.name   ? icon.active : icon.inactive }} 
      style={[
        styles.icon,
        icon.name == 'Profile'  ? styles.profilePic() : null,
        activeTab == 'Profile' && icon.name == activeTab 
        ? styles.profilePic(activeTab) 
        : null,
      ]}
      />
    </TouchableOpacity>
  )
  return (
    <View  style={styles.wrapper}>
      <View style={styles.container}>
        {icons.map(( icon, index ) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create( {
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '%',
    zIndex: 999,
    backgroundColor:'black',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },

  icon:{
    width: 30,
    height: 30,
  },

  profilePic: (activeTab ='' ) => ({
    borderRadius: 50,
    borderWidth: activeTab == 'Profile'  ? 2 :  0,
    borderColor: '#fff' ,
  }),
  
})


export default BottomTabs;
