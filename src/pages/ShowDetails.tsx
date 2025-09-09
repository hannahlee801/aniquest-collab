import Header from "../components/Header";

const ShowDetails = () => {
  return (
    <div className="font-anton ml-[25px] mr-[25px]">
      <Header />
      <div className="flex flex-col items-center">
        <img
          src="inuyasha-small.jpg"
          alt="InuYasha"
          className="mt-[100px] outline-3 outline-maingrey-300 rounded-lg w-[243.815px] h-[354.53px] mb-[20px] drop-shadow-black drop-shadow-xl"
        />
        <h1 className="text-white text-3xl mb-3">InuYasha</h1>
        <div className="flex">
          <div className="flex">
            <img
              src="../src/assets/aniquestglobe.png"
              alt="Globe Icon"
              className="w-6 h-6"
            />
            <p className="text-sm text-white underline">76.39</p>
          </div>
          <div className="flex ml-2">
            <img src="../src/assets/aniquestheart.png" alt="Heart Icon" className="w-6 h-6" />
            <p className="text-sm text-white underline">1065</p>
          </div>
          <div className="flex text-sm mb-4">
            <p className="ml-2 text-medorange-400 underline">PG</p>
            <p className="ml-2 text-brightred-600 underline">167 Episodes</p>
            <p className="ml-2 text-white underline">24m</p>
          </div>
        </div>
        <div className="flex space-x-4 text-sm">
          <button className="bg-maingrey-300 p-1 rounded-lg pl-3 pr-3 drop-shadow-md drop-shadow-black">REVIEW NOW</button>
          <button className="bg-medorange-400 p-1 rounded-lg pl-3 pr-3 drop-shadow-md drop-shadow-black">ADD TO LIST</button>
        </div>
        <div className="text-white">
          <div className="text-sm text-center mt-5">
            <p className="mb-3">Based on the Shogakukan award-winning manga of the same name, InuYasha follows Kagome Higurashi, a fifteen-year-old girl whose normal life ends when a demon drags her into a cursed well on the grounds of her family's Shinto shrine. Instead of hitting the bottom of the well, Kagome ends up 500 years in the past during Japan's violent Sengoku period with the demon's true target, a wish-granting jewel called the Shikon Jewel, reborn inside of her.</p>
            <p className="mb-5">After a battle with a revived demon accidentally causes the sacred jewel to shatter, Kagome enlists the help of a young hybrid dog-demon/human named Inuyasha to help her collect the shards and prevent them from falling into the wrong hands. Joining Kagome and Inuyasha on their quest are the orphan fox-demon Shippo, the intelligent monk Miroku, and the lethal demon slayer Sango. Together, they must set aside their differences and work together to find the power granting shards spread across feudal Japan and deal with the threats that arise.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;