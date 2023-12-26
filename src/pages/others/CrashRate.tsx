import './style.scss'
import { Inputs, Question, Result, Text } from '../../comps'


const CrashRate: React.FC = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about your system crashes' h4='CRASH RATE INSPECTOR'/>
      <Question 
        q1='How often do you experience crashes or unexpected termination?'
        q2='How many scenerios do you think can lead to crashes?'
        q3=' How severe is the impact of crashes on your experience?'
      />
      <Inputs
        text1='Total User session'
        text2='Crashes Observed'
        setResult={() => {}}
        setCodeChrun={() => {}}
        setCodeCoverage={() => {}}
        setCsat={() => {}}
      />

      <Result result={0} msg=''/>
    </div>
  )
}

export default CrashRate
