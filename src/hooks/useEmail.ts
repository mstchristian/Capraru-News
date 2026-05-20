import emailjs from "@emailjs/browser";

export function useEmail() {
  const sendEmail = async (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      await emailjs.send(
        "service",
        "template",
        {
          name: data.name,
          email: data.email,
          message: data.message,
          time: new Date().toLocaleString("es-ES", {
            dateStyle: "full",
            timeStyle: "short",
          }),
        },
        "key"
      );

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  };

  return { sendEmail };
}