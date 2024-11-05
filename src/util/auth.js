import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storedTokenDuration = localStorage.getItem("expiration");
  const expiration = new Date(storedTokenDuration);
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
}
export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }
  const duration = getTokenDuration();

  if (duration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  if (!token) {
    return redirect("/account/signup");
  }
}
