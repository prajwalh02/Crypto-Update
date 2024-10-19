import Skeleton from "./Skeleton";

const Section = ({ name, Component, data }) => {
  let { response , loading } = data;

  //loader
  if(loading) {
    return(
      <div className="wrapper-container mt-8">
        <Skeleton className='h-8 w-32' />
        <Skeleton className='h-8 w-full mt-8' />
        <Skeleton className='h-8 w-full mt-8' />
        <Skeleton className='h-8 w-full mt-8' />
        <Skeleton className='h-8 w-full mt-8' />
      </div>
    )
  }

  if (name == "Trending" && response) {
      response = response.coins;
  }

  return (
    <div className="mt-8">
      <h1 className="text-2xl mb-2 font-semibold">{name}</h1>
      {response &&
        response.map((value) => {
          if (name == "Trending") {
            return <Component key={value.item.coin_id} coin={value.item} />;
          }
          return <Component key={value.id} coin={value} />;
        })}
    </div>
  );
};

export default Section;
