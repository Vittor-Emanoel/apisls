export async function handler(event){
  console.log(event)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello!",
      }, 
    ),
  };
};
