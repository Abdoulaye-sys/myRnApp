import { View, Text, TextInput, Image, Button } from 'react-native'
import React, { useState }  from 'react'
import * as yup from 'yup'
import  {Formik}  from 'formik';
import validUrl from 'valid-url'

const PLACEHOLDER_IMG =
'http://cdn.onlinewebfonts.com/svg/img_562621.png'


const uploadPostSchema = yup.object().shape({
    imageUrl: yup.string().url().required('A URL is required'),
    caption: yup.string().max(2200, 'Captain has reached the character limit.')
})


const FormikPostUploader = ({navigation}) => {
  
    const[thumbnailUrl,  setThumbnailUrl] = useState(PLACEHOLDER_IMG)

  return (
      <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values)  => {
        console.log(values)
        console.log('Ta publication a été bien soumis')
        navigation.goBack()
    }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
      >
         {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            isValid,
        }) => (
            <>
                <View
                style={{
                    margin: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                }}
                >
                    <Image 
                    source={{ 
                        uri: validUrl.isUri(thumbnailUrl)  ? thumbnailUrl : PLACEHOLDER_IMG }} 
                    style={{ width: 100, height: 100 }}
                    />


                     <View style={{  flex:1, marginLeft: 12 }}>
                         <TextInput 
                        style={{ color: 'white', fontSize: 20 }}
                        placeholder='Ecris une rubrique mon petit Dylan ...' 
                        placeholderTextColor='gray'
                        multiline={true}
                        onChangeText={handleChange('caption')}
                        onBlur={handleBlur('caption')}
                        value={values.caption} 
                            /> 
                        </View>
                    </View>
                    <TextInput
                    onChange={e => setThumbnailUrl(e.nativeEvent.text)} 
                    style={{ color: 'white', fontSize:  18 }}
                    placeholder='Entre lURL de ton image' 
                    placeholderTextColor='gray'
                    onChangeText={handleChange('imageUrl')}
                    onBlur={handleBlur('imageUrl')}
                    value={values.imageUrl} 
                /> 
                {errors.imageUrl && (
                    <Text style={{ fontSize: 10, color: 'red' }}>
                        {errors.imageUrl}
                    </Text>
                )}
            <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
           
            </>
        )}
      </Formik>
  )
}

export default FormikPostUploader