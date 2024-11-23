import { cookies } from "next/headers";

/**
 * Get the initial theme from the server cookies.
 * @returns The theme as "light" or "dark".
 */
export const getInitialTheme = async (): Promise<"light" | "dark"> => {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  return themeCookie?.value === "light" ? "light" : "dark";
};
