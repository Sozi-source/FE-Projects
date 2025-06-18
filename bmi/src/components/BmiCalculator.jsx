import React, { useState } from 'react'

function BmiCalculator() {
  const [bmi, setBmi] = useState(null);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculateBmi = () => {
    const numWeight = parseFloat(weight) || 0;
    const numHeight = parseFloat(height) || 0;

    if (numWeight && numHeight) {
      const calculatedBmi = (numWeight / (numHeight / 100) ** 2).toFixed(1);
      setBmi(calculatedBmi);
    } else {
      setBmi(null);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmi();
  }

  const bmiCategory = () => {
    if (!bmi) return null;
    const bmiValue = parseFloat(bmi);
    
    if (bmiValue < 18.5) return {
      label: "Underweight", 
      color: "text-yellow-500", 
      recommendation: "Increase calorie intake with balanced meals to reach a healthy weight."
    };
    if (bmiValue >= 18.5 && bmiValue <= 24.9) return {
      label: "Normal Weight", 
      color: "text-green-500", 
      recommendation: "Maintain a balanced diet with a mix of protein, healthy fats, and complex carbohydrates."
    };
    if (bmiValue >= 25.0 && bmiValue <= 29.9) return {
      label: "Overweight", 
      color: "text-orange-500", 
      recommendation: "Focus on calorie-controlled meals and increase physical activity."
    };
    if (bmiValue >= 30.0 && bmiValue <= 34.9) return {
      label: "Obese (Class I)", 
      color: "text-red-500", 
      recommendation: "Adopt a lower-calorie diet with more vegetables, lean proteins, and whole grains."
    };
    if (bmiValue >= 35.0 && bmiValue <= 39.9) return {
      label: "Obese (Class II)", 
      color: "text-red-600", 
      recommendation: "Consult a healthcare provider for personalized weight management and diet."
    };
    if (bmiValue >= 40.0) return {
      label: "Obese (Class III)", 
      color: "text-red-700", 
      recommendation: "Seek medical advice for a structured weight loss plan including diet and exercise."
    };
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8'>
      <div className='w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-6 sm:mb-8'>
          <div className='inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-lg'>
            <span className='text-2xl sm:text-3xl'>⚖️</span>
          </div>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2'>
            BMI Calculator
          </h1>
          <p className='text-gray-600 text-sm sm:text-base'>Calculate your Body Mass Index</p>
        </div>

        {/* Main Card */}
        <div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 p-6 sm:p-8 lg:p-10 mb-6'>
          <div className='space-y-5 sm:space-y-6'>
            {/* Weight Input */}
            <div className='space-y-2'>
              <label htmlFor="weight" className='block text-sm sm:text-base font-semibold text-gray-700'>
                Weight (kg)
              </label>
              <div className='relative'>
                <input 
                  id="weight"
                  type="number" 
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight"
                  className='w-full px-4 py-3 sm:py-4 text-base sm:text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 placeholder-gray-400'
                />
                <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base font-medium'>
                  kg
                </div>
              </div>
            </div>

            {/* Height Input */}
            <div className='space-y-2'>
              <label htmlFor="height" className='block text-sm sm:text-base font-semibold text-gray-700'>
                Height (cm)
              </label>
              <div className='relative'>
                <input 
                  id="height"
                  type="number" 
                  value={height} 
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                  className='w-full px-4 py-3 sm:py-4 text-base sm:text-lg bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 placeholder-gray-400'
                />
                <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base font-medium'>
                  cm
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button 
              onClick={calculateBmi}
              className='w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 sm:py-5 px-6 rounded-xl text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 active:scale-95'
            >
              Calculate BMI
            </button>
          </div>
        </div>
        
        {/* Results Card */}
        {bmi && (
          <div className='bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/50 p-6 sm:p-8 lg:p-10 animate-in slide-in-from-bottom-4 duration-500'>
            {/* BMI Score */}
            <div className='text-center mb-6 sm:mb-8'>
              <h2 className='text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4'>Your BMI Result</h2>
              <div className='inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-4 shadow-inner'>
                <span className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800'>{bmi}</span>
              </div>
              <div className='space-y-2'>
                <p className={`${bmiCategory()?.color} font-bold text-lg sm:text-xl lg:text-2xl`}>
                  {bmiCategory()?.label}
                </p>
                {/* BMI Ranges */}
                <div className='text-xs sm:text-sm text-gray-600 space-y-1 mt-4'>
                  <div className='grid grid-cols-2 gap-2 text-left max-w-xs mx-auto'>
                    <span className='text-yellow-500'>• Underweight:</span><span>&lt; 18.5</span>
                    <span className='text-green-500'>• Normal:</span><span>18.5 - 24.9</span>
                    <span className='text-orange-500'>• Overweight:</span><span>25.0 - 29.9</span>
                    <span className='text-red-500'>• Obese:</span><span>&gt; 30.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation */}
            <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-100'>
              <div className='flex items-start space-x-3'>
                <div className='flex-shrink-0'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center'>
                    <span className='text-white text-sm sm:text-base'>💡</span>
                  </div>
                </div>
                <div className='flex-1'>
                  <h3 className='font-semibold text-gray-800 text-sm sm:text-base mb-2'>Recommendation</h3>
                  <p className='text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed'>
                    {bmiCategory()?.recommendation}
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className='mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-lg'>
              <p className='text-yellow-800 text-xs sm:text-sm text-center'>
                <span className='font-semibold'>Note:</span> BMI is a general indicator. Consult healthcare professionals for personalized advice.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BmiCalculator;