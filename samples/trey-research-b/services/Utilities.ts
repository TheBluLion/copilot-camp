import { Location } from "../model/baseModel";

// Throw this object to return an HTTP error
export class HttpError extends Error {
  status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

// Clean up common issues with Copilot parameters
export function cleanUpParameter(name: string, value: string): string {

  let val = value.toLowerCase();
  if (val.toLowerCase().includes("trey") || val.toLowerCase().includes("research")) {
    const newVal = val.replace("trey", "").replace("research", "").trim();
    console.log(`   ❗ Plugin name detected in the ${name} parameter '${val}'; replacing with '${newVal}'.`);
    val = newVal;
  }
  if (val === "<user_name>") {
    console.log(`   ❗ Invalid name '${val}'; replacing with 'avery'.`);
    val = "avery";
  }
  return val;

}

// Augment a location with a map URL
export function getLocationWithMap(location: Location): Location {

  const result = location;
  const bingKey = process.env.BING_MAPS_KEY;
  const coord = `${location.latitude},${location.longitude}`;
  result.mapUrl = `https://dev.virtualearth.net/REST/v1/Imagery/Map/Road/?${coord}mapSize=450,600&pp=${coord}&key=${bingKey}`;
  return result;

}