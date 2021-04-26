import React, { useState } from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  ScrollView,
  Modal,
  Image,
} from "react-native";

import Header from './../../components/Header/index';
import Style from './style'



export default function ServiceHelp() {

  const [modalV, setModalV] = useState(false);
  const [quantidade1, setQuantidade1] = useState(0);
  const [quantidade2, setQuantidade2] = useState(0);
  const [quantidade3, setQuantidade3] = useState(0);
  const [quantidade4, setQuantidade4] = useState(0);

  return (
    
    <View>
      {/* Topo da tela */}
      <View  style={Style.Header}>
        <Header />
        <Text style={Style.Title}>Atendimento</Text>
      </View>

      {/* View Que contém campo de inputs e botão de consulta */}
      <View style={Style.ViewInput}>
        <Text style={Style.SubBlack}>Digite o nome do medicamento:</Text>
        <TextInput 
        placeholderTextColor={'#009AED'}
        style={Style.Inputs} 
        placeholder='nome do medicamento' />
        
        <TouchableOpacity onPress={() => {setModalV(true)}} style={Style.Button} >
          <Text style={Style.TextButton}>Consultar
          </Text>
        </TouchableOpacity>
      </View>


      {/* RESULTADO */}

      <View style={Style.ViewResult}>
        <Modal
          style={Style.ModalResult}
          animationType='slide'
          visible={modalV}
          >

            {/* DIPIRONA */}
          <Text style={Style.TextResultado}>Resultados: </Text>
          <ScrollView style={Style.Scroll}>
            <View style={Style.Result}>
                  <Image 
                  style={Style.IconRemedio}
                  source={require('../../assets/Dipirona.jpg')} />
                  <View style={Style.InfoRemedio}>
                      <Text style={Style.TituloRemedio}>Dipirona</Text>
                      <ScrollView style={Style.InfoScroll}>
                          <Text style={Style.DescricaoRemedio}>Lorem IpsumLorem IpsumLoremIpsumLoremLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
                      </ScrollView>
                     
                     {/* QUANTIDADE */}
                     <Text style={Style.qntTxt}>Quantidade</Text>
                     <View style={Style.quantidadeView}>
                        <Text style={Style.PrecoRemedio}>R$ 15,00</Text>
                        
                        <TouchableOpacity
                            onPress={() => {
                              quantidade1 != 0 ? setQuantidade1(quantidade1 - 1)
                              :false                              
                            }}
                            style={Style.quant}>
                            <Text style={Style.txtQuant}>-</Text>
                        </TouchableOpacity>

                        <Text style={Style.textoQuant}>{quantidade1}</Text>

                        <TouchableOpacity
                            onPress={() => { 
                              setQuantidade1(quantidade1 +1)
                            }}
                            style={Style.quant}>
                            <Text style={Style.txtQuant}>+</Text>
                        </TouchableOpacity>
                      </View>
                      

                  </View>
            </View>
            {/* NIMESULIDA */}
            <View style={Style.Result}>
              <Image 
                    style={Style.IconRemedio}
                    source={require('../../assets/Nimesulida.jpg')} />
                    <View style={Style.InfoRemedio}>
                        <Text style={Style.TituloRemedio}>Nimesulida</Text>
                        <ScrollView style={Style.InfoScroll}>
                            <Text style={Style.DescricaoRemedio}>Lorem IpsumLorem IpsumLoremIpsumLoremLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
                        </ScrollView>
                        
                        {/* QUANTIDADE */}
                     <Text style={Style.qntTxt}>Quantidade</Text>
                     <View style={Style.quantidadeView}>
                     <Text style={Style.PrecoRemedio}>R$ 19,99</Text>
                                               
                        <TouchableOpacity
                            onPress={() => {
                              quantidade2 != 0 ? setQuantidade2(quantidade2 - 1)
                              :false                              
                            }}
                            style={Style.quant}>
                            <Text style={Style.txtQuant}>-</Text>
                        </TouchableOpacity>

                        <Text style={Style.textoQuant}>{quantidade2}</Text>

                        <TouchableOpacity
                            onPress={() => { 
                              setQuantidade2(quantidade2 +1)
                            }}
                            style={Style.quant}>
                            <Text style={Style.txtQuant}>+</Text>
                        </TouchableOpacity>
                      </View>
                                          
                    </View>
 
            </View>
            
            {/* IBUPROFENO */}
            <View style={Style.Result}>
                  <Image 
                      style={Style.IconRemedio}
                      source={require('../../assets/Ibuprofeno.png')} />
                      <View style={Style.InfoRemedio}>
                          <Text style={Style.TituloRemedio}>Ibuprofeno</Text>
                          <ScrollView style={Style.InfoScroll}>
                              <Text style={Style.DescricaoRemedio}>Lorem IpsumLorem IpsumLoremIpsumLoremLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
                          </ScrollView>
                        
                          <Text style={Style.qntTxt}>Quantidade</Text>
                     <View style={Style.quantidadeView}>
                     <Text style={Style.PrecoRemedio}>R$ 12,99</Text>
                                               
                        <TouchableOpacity
                            onPress={() => {
                              quantidade3 != 0 ? setQuantidade3(quantidade3 - 1)
                              :false                              
                            }}
                            style={Style.quant}>
                            <Text style={Style.txtQuant}>-</Text>
                        </TouchableOpacity>

                        <Text style={Style.textoQuant}>{quantidade3}</Text>

                        <TouchableOpacity
                            onPress={() => { 
                              setQuantidade3(quantidade3 +1)
                            }}
                            style={Style.quant}>
                            <Text style={Style.txtQuant}>+</Text>
                        </TouchableOpacity>
                      </View>
                      </View>

            </View>

            {/* DORFLEX */}
            <View style={Style.Result}>
                  <Image 
                      style={Style.IconRemedio}
                      source={require('../../assets/dorflex.jpg')} />
                      <View style={Style.InfoRemedio}>
                          <Text style={Style.TituloRemedio}>Dorflex</Text>
                          <ScrollView style={Style.InfoScroll}>
                              <Text style={Style.DescricaoRemedio}>Lorem IpsumLorem IpsumLoremIpsumLoremLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</Text>
                          </ScrollView>

                          <Text style={Style.qntTxt}>Quantidade</Text>
                     <View style={Style.quantidadeView}>
                     <Text style={Style.PrecoRemedio}>R$ 9,99</Text>
                                               
                        <TouchableOpacity
                            onPress={() => {
                              quantidade4 != 0 ? setQuantidade4(quantidade4 - 1)
                              :false                              
                            }}
                            style={Style.quant}>
                            <Text style={Style.txtQuant}>-</Text>
                        </TouchableOpacity>

                        <Text style={Style.textoQuant}>{quantidade4}</Text>

                        <TouchableOpacity
                            onPress={() => { 
                              setQuantidade4(quantidade4 +1)
                            }}
                            style={Style.quant}>
                            <Text style={Style.txtQuant}>+</Text>
                        </TouchableOpacity>
                      </View>
                      </View>

                      
            </View>
            
          </ScrollView>

          <TouchableOpacity onPress={() => {setModalV(false)}} style={Style.Button} >
            <Text style={Style.TextButton}>Fechar
            </Text>
          </TouchableOpacity>
        </Modal>
      </View>
      

    </View>
  );
}
