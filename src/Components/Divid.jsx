import React from 'react'

function Divid(Props) {
  return (
    <div>
        <div>
        <img  src={Props.id}className="rounded-lg shadow-lg mb-6 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-2xl"/>

                            <h3 className="text-xl font-medium text-gray-800">{Props.class}</h3>
                            <p className="mt-2 text-gray-600 w-[80%] ">
                                Focus on how you can help and benefit your user. Use simple words
                                so that you don't confuse people.
                            </p>
                        </div>

    </div>
  )
}

export default Divid