import { Provider } from "react-redux";
import { store } from "../../state/store";

type AppProvidersProps = {
  children: React.ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}