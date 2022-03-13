import '../script.js';

const Section = () => {
  return (
    <>
      <section className='flex items-center justify-center'>
        <div className='flex flex-col rounded-lg'>
          <div className='w-64 mx-auto self-center justify-center items-center'>
            <img className='shadow-xl rounded-full object-center object-cover items-center' src='https://avatars.githubusercontent.com/u/77146709?v=4' alt='Profile'/>
          </div>

          <div className='text-center mx-auto justify-center'>
            <h1 className='mt-8 text-3xl'>Wakaranai</h1>
            <p>Masukkan kata-kata yang ingin diubah</p> 
          </div>

          <div className='mt-8 text-center flex-none object-center items-center'>
            <form className='text-center items-center'>
              <input className='outline-none text-center bg-transparent w-full h-8' id='romaji' type='search' placeholder='Ketik Disini' />
            </form> 
          </div>
        </div>
      </section>
    </>
  )
}

export default Section; 
