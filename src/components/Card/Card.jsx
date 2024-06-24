import React from 'react';

const Card = ({ nameCharacter, imgCharacter, genderCharacter }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
      <img className="w-full h-48 object-cover" src={imgCharacter} alt={nameCharacter} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold mb-2">{nameCharacter}</h2>
        <p className="text-gray-700 text-base">
          Gender: {genderCharacter}
        </p>
      </div>
    </div>
  );
};

export default Card;