import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
 
      const res = await fetch (`http://localhost:3000/api/tickes/${id}`, {
        cache: "no-store"
      })

      if (!res.ok) {
        throw new Error("Failed to get ticket.")
      }
      return res.json();
    }

const TicketPage = async ({params}) => {
  const EDITMODE = params.id === "new" ? false : true
  let upDateTicketData = {};

  if (EDITMODE) {
    upDateTicketData = await getTicketById(params.id);
    upDateTicketData =  upDateTicketData.foundTicket;
  } else {
      upDateTicketData = {
          _id:"new",
        }
      }
      
      return <TicketForm ticket={upDateTicketData}/> 
};

export default TicketPage
