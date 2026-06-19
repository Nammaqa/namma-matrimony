import { useState } from "react";
import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/pages/LandingPage";
import MatchesPage from "@/pages/MatchesPage";
import MyRishteyPage from "@/pages/dashboard/MyRishteyPage";
import SearchPage from "@/pages/dashboard/SearchPage";
import InboxPage from "@/pages/dashboard/InboxPage";
import PremiumPage from "@/pages/dashboard/PremiumPage";
import ProfilePage from "@/pages/dashboard/ProfilePage";
import SettingsPage from "@/pages/dashboard/SettingsPage";
import ProfileDetailPage from "@/pages/dashboard/ProfileDetailPage";
import InterestsPage from "@/pages/dashboard/InterestsPage";
import MessagesPage from "@/pages/dashboard/MessagesPage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sentInterests, setSentInterests] = useState<number[]>([]);
  const [acceptedConnections, setAcceptedConnections] = useState<number[]>([1]);
  const [shortlisted, setShortlisted] = useState<number[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<number[]>([]);

  const sharedProps = {
    sentInterests,
    setSentInterests,
    acceptedConnections,
    setAcceptedConnections,
    shortlisted,
    setShortlisted,
    recentlyViewed,
    setRecentlyViewed,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Switch>
            <Route path="/">
              {isLoggedIn ? <Redirect to="/dashboard" /> : <LandingPage setIsLoggedIn={setIsLoggedIn} />}
            </Route>
            <Route path="/dashboard">
              {isLoggedIn ? <MatchesPage setIsLoggedIn={setIsLoggedIn} {...sharedProps} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/my-rishtey">
              {isLoggedIn ? <MyRishteyPage setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/search">
              {isLoggedIn ? <SearchPage setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/inbox">
              {isLoggedIn ? <InboxPage setIsLoggedIn={setIsLoggedIn} sentInterests={sentInterests} acceptedConnections={acceptedConnections} setAcceptedConnections={setAcceptedConnections} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/premium">
              {isLoggedIn ? <PremiumPage setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/profile">
              {isLoggedIn ? <ProfilePage setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/settings">
              {isLoggedIn ? <SettingsPage setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/view/:id">
              {isLoggedIn ? <ProfileDetailPage setIsLoggedIn={setIsLoggedIn} sentInterests={sentInterests} setSentInterests={setSentInterests} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/interests">
              {isLoggedIn ? <InterestsPage setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/" />}
            </Route>
            <Route path="/dashboard/messages/:id">
              {isLoggedIn ? <MessagesPage setIsLoggedIn={setIsLoggedIn} /> : <Redirect to="/" />}
            </Route>
            <Route component={NotFound} />
          </Switch>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
