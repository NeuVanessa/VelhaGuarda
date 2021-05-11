import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Style from "./Style"

export default function Version() {
  
  return (
    <View>
  
      {/* Topo da tela */}
      <View  style={Style.Header}>
        {/* Setting Icon */}
        <Text style={Style.VersionSoft}>Versão do Software</Text>
        <Image 
            style={Style.IconConfig}
            source={require('../../assets/Configuration.png')} 
            />
       </View>

       <View style={Style.InfoSoft}>
          <Text style={[Style.TxtVersion, {fontSize: 25}]}>Velha Guarda</Text>
          <Text style={Style.TxtVersion}>Versão 1.0</Text>
          
       </View>

       <Image
            source={require('../../assets/PatternSetting.png')}
            style={Style.Background}/>
        
            
    </View>
  );
}
