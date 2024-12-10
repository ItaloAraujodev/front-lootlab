const tabs = ["basic", "financial", "links", "details"];

export function getNextTab(currentTab: string): string {
  const currentIndex = tabs.indexOf(currentTab);
  return tabs[currentIndex + 1];
}

export function getPrevTab(currentTab: string) {
  const currentIndex = tabs.indexOf(currentTab);
  return tabs[currentIndex - 1];
}
