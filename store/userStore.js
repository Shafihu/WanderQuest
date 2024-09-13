//THIS IS JUST FOR TESTING INCASE OF HAVING COMPLICATED DATA WITH SO MANY NESTINGS.
import { create } from "zustand";
import { produce } from "immer";

const initialState = {
  user: {
    id: "user123",
    friends: ["jack", "jessica", "colin", "paulo"],
    profile: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345",
      },
    },
  },
};

export const useUserStore = create((set) => ({
  ...initialState,

  /* THIS IS THE WAY TO DO IT BUT WITH MORE INFORMATION THINGS CAN GET COMPLICATED TO HANDLE. THAT'S WHY YOU SHOULD USE A LIBRARY LIKE IMMER TO HANDLE THESE SITUATIONS.

  updateAddressStreet: (street) =>
    set((state) => ({
      user: {
        ...state.user,
        profile: {
          ...state.user.profile,
          address: {
            ...state.user.profile.address,
            street,
          },
        },
      },
    })),
*/

  //WITH IMMER, YOU CAN DIRECTLY ASSIGN VALUES TO DEEPLY NESTED OBJECTS WHILE MAINTAINING EVERYTHING THE SAME WAY.
  updateAddressStreet: (street) =>
    set(
      produce((state) => {
        state.user.profile.address.street = street;
      })
    ),
}));

/*THERE IS ALSO THE CONCEPT OF USING SELECTORS TO SIMPLIFY IMPORTS IN OTHER COMPONENTS. CHECK ALMOST THE ENDING OF THIS VIDEO 
https://www.youtube.com/watch?v=-Y8brhQKvtA */
