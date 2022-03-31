import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,  View, ScrollView, Image, Button, Linking, Text,  TouchableOpacity } from 'react-native';




export default function Portfolioscreen(){
    const openmeport=()=>{
        Linking.openURL('https://meportfolio.vercel.app/').catch(err => console.error('An error occurred', err));
      }
    const opentat=()=>{
        Linking.openURL('https://aleksandr232.github.io/rowingtatarstan.io/').catch(err => console.error('An error occurred', err));
      }
    const opennumber=()=>{
        Linking.openURL('https://number-io.vercel.app/').catch(err => console.error('An error occurred', err));
      }
    const openadd=()=>{
        Linking.openURL('https://aleksandr232.github.io/add-employees.io/').catch(err => console.error('An error occurred', err));
      }
    const opensnow=()=>{
        Linking.openURL('http://snowkzn.ru/').catch(err => console.error('An error occurred', err));
      }
    const opencalc=()=>{
        Linking.openURL('https://calc-io-gamma.vercel.app/').catch(err => console.error('An error occurred', err));
      }
    const opencoffe=()=>{
        Linking.openURL('https://coffe-iota.vercel.app/').catch(err => console.error('An error occurred', err));
      }
    const opengrove=()=>{
        Linking.openURL('https://grovemade.vercel.app/').catch(err => console.error('An error occurred', err));
      }
    const openindustrial=()=>{
        Linking.openURL('https://industrial-three.vercel.app/').catch(err => console.error('An error occurred', err));
      }
    const openweather=()=>{
        Linking.openURL('https://industrial-three.vercel.app/').catch(err => console.error('An error occurred', err));
      }
    



    return(
        <ScrollView>
            <TouchableOpacity onPress={opentat}>
                <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://im.kommersant.ru/Issues.photo/LifeStyle_Online/2019/06/27/KMO_120232_20616_1_t218_153158.jpg',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={opennumber}>
                <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://meportfolio.vercel.app/static/media/react.7e32594eb36a5c0b0a3d.jpg',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openadd}>
                <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://meportfolio.vercel.app/static/media/myapp.cf42e003f5acefce64df.png',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={opensnow}>
            <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://meportfolio.vercel.app/static/media/climbers.019688126a5ac0c2b058.png',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={opencalc}>
            <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAIwCAYAAACoSz2/AAAb+klEQVR4nO3de5SfBX3n8c8kk5AbuUJISAi5kJAQJAEJIIJcFVGEjagU14OrPXXdtba75+wx23ZPtWd3exq77R673dPudq0t25WmigiiVpvKTYQQCLdgEq65YICQ+4WETGayfwQECfHyJZlnfjOv1zn8kec3nPMJz8y8f7/n+c3QlmR/AOBX1L5w4cKmNwDQYhYsWJD2BQsWNL0DgBby6guPfg3vAKBFCQgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUtC9cuLDpDQC0IK9AAChp/9yQm5re0Od98aX5cR56DuejZ3E+ep4vvjQ/iVcgABQJCAAlAgJAiYAAUCIgAJQICAAlAgJAiYAAUCIgAJQICAAlAgJAiYAAUCIgAJQICAAlAgJAiYAAUCIgAJQICAAlAgJAiYAAUCIgAJQICAAlAgJAiYAAUCIgAJQICAAlAgJAiYAAUCIgAJQICAAlAgJAiYAAUCIgAJQICAAlAgJAiYAAUNLe9ICaSck5n01mzk2GDHstg517k11PJkv/ZbJiUKMLe7U5/zU587zkqCQZmOy8N/nHzyYb3vDpdP7/TaZvTP763zexEjjCWi8gx30quexjyVHrk6cWJcv/8rVvXFOuTU56dzJ6X7Mbe7O5f5mcOy1Z+qlk6aokpyb/4ovJFf/jDaH4RDJzXLL0Q0kGNzQWOJJaKyAj/lVyxSeS7X+fXP+lVw6+7q/wzA0H/smwBsb1ETPnJM/+0SvxSJLlyTf/OvnkZ5N5u5KlQw8cvuLDyY5bk4fEA3qrFroHMim5/JPJy99OvvalX/zhHAEfTYbuTJ694Q3Hv57sHZiMeOWV36TPJxP2JEv+uNsXAt2ndQIy6z8kx2xM7v79ppfwc01Kzr0k+cnfJs8MbHoM9Bxn/MfkjHlNrzisWicg005Kti7zTalRX012DUsmXvuG4//6wCuTjQOTub+bjHg8uesbjSyEHuvES5MTT256xWHVOgEZOSrZurTpFax8OJnw8WTOzFcOnJrM/3Cy647kocuT005Jfvx7ybb+jc4EjrwWuYn+iQNv5Hn+H5KMaHpM3/bQp5MBX0rO+kpy7t4Dx7bdmXzrD5JLv57knuSuFxqdCHSPFgkIPcrS307e+GJwxL9LpoxOll6ZjPj15L0fS8aMSvYn6XouWf4nyd13N7EWOEJaJCArk5eTtE1PsqHpMbyZi69Ktt544DLWxz6dvHxj8v/+9MClrBl/mFzyhWT3dcmy55peCt3gE8lvfOqVH7Z9vc8kv/mZ1/748rLkrz7zxg9qGS0SkHuS3R3JyKuT/EXTY3ijKf8tGbcx+fafJXO+nAxdnXzrT1+7D/L47yZTbkpm/nqy7L80OhW6x1eSv/rKzx6avzjJ3yQ3/V0Tg46I1rmJ/sKaZPTbkxGdTS/hZ7wjeedZyeo/S9YOSI4dlex6/OCb6C+8kAwd38xE4IhonYDc+YNk3+zk4o83vYTXO+dTyeBHk+/+qOklQDdrnYDkK8mDDycTfiN593ubHkOS5BPJ7InJo//5tUMbtyRDJx/8oeOPS3Y83m3LgCOvhQKSZNmnkx89lJz0+eS6LydnXvK6S1qnJnM+k8xflFy4vdGZfcblVyYv35Hc+/xrxx76+2TXjGT+v3nt3Mz542TysGTlHzWzs6/68J3J/I81vYJXrVmcrFn1iz+uhbTITfTXWfbbybNXJ+d8JDn995NzXndT9uXNycZ7kh8PaW5fXzHp88nkgcnt/ynJ6391/u3Jt/4yef8nk4/+2oFDe59L7v9Nv1ixW302Gb0jufP/5GfPD41Z1vueQLVeQJJkw43JLTf+nA9ozb9WS1n7B6+8Ie5Nvjlt+2ry1a929yJeb94ZScfj/r84HFGtdQkL+OVMOiH5Se95uyg9k4BAr/OJZOT2ZMW9TQ+hl3OtB3qdryRf/kqSAU0PoZfzCgSAEgEBoERAACgREABKBASAEgEBoERAACgREABKBASAEgEBoERAACgREABKBASAEgEBoERAACgREABKBASAEgEBoERAACgREABKBASAEgEBoERAACgREABKBASAEgEBoERAACgREABKBASAEgEBoERAAChpW7hw4f6mRwDQWhYsWJD2a669rukdfd6iG66P89BzOB89y6Ibrs/nhtzU9Axe54svzU/iEhYARQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJQICQImAAFAiIACUCAgAJe1ND/jlbc7KW27Nw7t+/kftHXderrloagZ2zyiS9Nu6Mvff82ie2b47+7qSruHH56S552XehEFNT+uTDj4fE3PqOy/M20Z6vthjTPrD5P0Tkq9+LNnWv+k1ZS0UkNGZeeV1mXmIR9u61mf5zUvywpxpGZj93bqsLztq05LcvHh9Br3jfblq0tC0J9n37N25/e6bsvicj+bSSc5Fd+r31OJ87eGXM/Hc+bl6XHuSznQ9fWe+872bs/HSD+aiMc5HjzB3brLltpaOR9KLLmH1X/VQHjz2jFw82hdI9+nIkw+uzJ7TLs+Fr8QjSdonvjPve/uYvPjoQ9nU6L6+pa1rTe5/cEdGX3BFzh736tnon35TL8pVZwzNi0ucj57hQ8kxQ5OnvtD0kLesVwSkrWt9Hl65L5NPO7HpKX3Mujy/aVRGTzr4UlXHlBMydfuLWdvAqr5q2DOr8sjwmXnnm7zK6Jx+ambvWZPHfsElYLrBvPcnWZYsHdr0kresVwTkwKuPOTlveNNL+pr+6d+/M+loa3oISbZs25FBx4w/xP2/43PsqC3Ztt65atakZNq05Cd/1/SQw6IXBGR9Hl75co4/ZXLTQ/qgEzP1+N1Z//SWgx7pv+qZ/PjYCZndwCoObdeOg88V3WjSp5PRG5MV9za95LBo+YAMWvlQ7jt6Zs5z76MRo+ddlNnP/VO+89jG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',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={opencoffe}>
            <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://meportfolio.vercel.app/static/media/coffe.1be8067db370c8823e47.png',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={opengrove}>
            <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://meportfolio.vercel.app/static/media/grev.6d2e767c4c06baa390af.png',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openindustrial}>
            <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://meportfolio.vercel.app/static/media/industrial.a81ecfb706f3da5945bc.jpg',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={openweather}>
            <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://meportfolio.vercel.app/static/media/weather.13e34436ae568edcf05f.jpg',
                    }}
                    />
                  </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openmeport}>
            <View style={styles.port}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                     uri: 'https://meportfolio.vercel.app/static/media/meprtfolio.d4b1f130aad0fd2b2ec9.png',
                    }}
                    />
                  </View>
            </TouchableOpacity>
        </ScrollView> 
        
        


                
    
    )
}



const styles=StyleSheet.create({
    port:{
        marginBottom: 30,
        overflow: 'hidden'
    },
    tinyLogo: {
        width: '100%',
        height: 350,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})