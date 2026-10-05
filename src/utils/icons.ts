export const getDomainIcon = (domain: string): string => {
  const icons: Record<string, string> = {
    light: 'mdi:lightbulb',
    switch: 'mdi:power-plug',
    sensor: 'mdi:eye',
    energy: 'mdi:flash',
    binary_sensor: 'mdi:radiobox-blank',
    cover: 'mdi:window-shutter',
    climate: 'mdi:thermostat',
    fan: 'mdi:fan',
    lock: 'mdi:lock',
    media_player: 'mdi:play-circle',
    camera: 'mdi:camera',
    vacuum: 'mdi:robot-vacuum',
    person: 'mdi:account',
    automation: 'mdi:robot',
    script: 'mdi:script-text',
    scene: 'mdi:palette',
    event: 'mdi:gesture-tap-button',
    alarm_control_panel: 'mdi:security',
    button: 'mdi:gesture-tap-button',
    number: 'mdi:numeric',
    select: 'mdi:form-dropdown',
    input_boolean: 'mdi:toggle-switch',
    input_button: 'mdi:gesture-tap-button',
    input_number: 'mdi:numeric',
    input_select: 'mdi:form-dropdown',
    input_text: 'mdi:form-textbox',
    water_heater: 'mdi:water-boiler',
    humidifier: 'mdi:air-humidifier',
    siren: 'mdi:bullhorn',
    valve: 'mdi:valve',
    update: 'mdi:update',
    sun: 'mdi:white-balance-sunny',
    weather: 'mdi:weather-cloudy',
    device_tracker: 'mdi:map-marker-radius',
    remote: 'mdi:remote',
    image: 'mdi:image',
    todo: 'mdi:clipboard-list',
    calendar: 'mdi:calendar',
    lawn_mower: 'mdi:robot-mower',
    text: 'mdi:form-textbox',
    date: 'mdi:calendar',
    time: 'mdi:clock-outline',
    timer: 'mdi:timer-outline',
    counter: 'mdi:counter',
  };
  return icons[domain] || 'mdi:shape-outline';
};

export const getDomainColor = (domain: string, deviceClass?: string): string => {
  // DD Next semantic colour families:
  // red = hazards, amber/gold = light/energy, blue = controls,
  // orange = openings/mechanics, steel blue = general sensors,
  // green = presence/running, slate = neutral activity,
  // violet = media/events, light blue = climate/temperature,
  // cyan = air/humidity, turquoise = camera/connectivity.
  if (domain === 'binary_sensor') {
    const deviceClassColors: Record<string, string> = {
      // Red — genuine warnings / hazards (10 incl. alarm domain below)
      moisture: '#DF5B63',
      smoke: '#DF5B63',
      gas: '#DF5B63',
      carbon_monoxide: '#DF5B63',
      problem: '#DF5B63',
      safety: '#DF5B63',
      tamper: '#DF5B63',
      heat: '#DF5B63',
      cold: '#DF5B63',

      // Amber / gold — light and electrical activity
      light: '#E1A129',
      plug: '#D88E20',
      power: '#D88E20',

      // Blue — controls
      lock: '#2F6FD6',

      // Orange — openings / mechanics
      window: '#D98928',
      door: '#D98928',
      opening: '#D98928',
      garage_door: '#D98928',

      // Steel blue — informational sensors
      battery: '#4F79A7',
      battery_charging: '#4F79A7',
      update: '#4F79A7',

      // Green — presence / active process
      occupancy: '#3F9B6D',
      presence: '#3F9B6D',
      running: '#3F9B6D',

      // Slate — neutral activity
      motion: '#6D7891',
      vibration: '#6D7891',

      // Violet — media-like signal/event state
      sound: '#7C67C7',

      // Turquoise — connectivity
      connectivity: '#1494AA',
    };
    if (deviceClass && deviceClassColors[deviceClass]) {
      return deviceClassColors[deviceClass]!;
    }
  }

  const colors: Record<string, string> = {
    // Red — alarm / danger
    alarm_control_panel: '#DF5B63',

    // Amber / gold — light / energy
    light: '#E1A129',
    wattage: '#D88E20',
    energy: '#D88E20',

    // Blue — controls
    switch: '#2F6FD6',
    input_boolean: '#2F6FD6',
    lock: '#2F6FD6',
    select: '#2F6FD6',
    input_select: '#2F6FD6',
    button: '#2F6FD6',
    input_button: '#2F6FD6',
    remote: '#2F6FD6',

    // Orange — openings / mechanics
    cover: '#D98928',

    // Steel blue — general sensors / updates
    sensor: '#4F79A7',
    update: '#4F79A7',

    // Green — people / presence
    person: '#3F9B6D',

    // Slate — neutral device/activity
    binary_sensor: '#6D7891',
    vacuum: '#6D7891',

    // Violet — media / events
    media_player: '#7C67C7',
    event: '#7C67C7',

    // Light blue — climate / temperature
    climate: '#34A6D8',
    temperature: '#34A6D8',

    // Cyan — air / humidity
    fan: '#16A6B6',
    humidity: '#16A6B6',

    // Turquoise — camera / connectivity
    camera: '#1494AA',
  };

  return colors[domain] || '#6D7891';
};

export const getAlertIcon = (deviceClass?: string): string => {
  if (!deviceClass) return 'mdi:alert';

  const icons: Record<string, string> = {
    door: 'mdi:door-open',
    window: 'mdi:window-open',
    motion: 'mdi:motion-sensor',
    moisture: 'mdi:water-alert',
    smoke: 'mdi:smoke-detector-alert',
    problem: 'mdi:alert-circle',
    safety: 'mdi:shield-alert',
    heat: 'mdi:fire-alert',
    cold: 'mdi:snowflake-alert',
    gas: 'mdi:gas-cylinder',
    vibration: 'mdi:vibrate'
  };
  return icons[deviceClass] || 'mdi:alert';
};

export const getDeviceClassIcon = (domain: string, deviceClass?: string): string => {
  if (!deviceClass) return getDomainIcon(domain);

  const domainIcons: Record<string, Record<string, string>> = {
    binary_sensor: {
      door: 'mdi:door',
      window: 'mdi:window-closed',
      motion: 'mdi:motion-sensor',
      occupancy: 'mdi:home-account',
      moisture: 'mdi:water',
      smoke: 'mdi:smoke-detector',
      heat: 'mdi:thermometer-alert',
      cold: 'mdi:snowflake',
      gas: 'mdi:gas-cylinder',
      vibration: 'mdi:vibrate',
      battery: 'mdi:battery',
      battery_charging: 'mdi:battery-charging',
      plug: 'mdi:power-plug',
      power: 'mdi:flash',
      presence: 'mdi:account-check',
      problem: 'mdi:alert-circle',
      safety: 'mdi:shield-check',
      lock: 'mdi:lock',
      opening: 'mdi:door',
      sound: 'mdi:volume-high',
      update: 'mdi:update',
      light: 'mdi:lightbulb'
    },
    sensor: {
      temperature: 'mdi:thermometer',
      humidity: 'mdi:water-percent',
      illuminance: 'mdi:brightness-7',
      pressure: 'mdi:gauge',
      battery: 'mdi:battery',
      power: 'mdi:flash',
      energy: 'mdi:lightning-bolt',
      current: 'mdi:current-ac',
      voltage: 'mdi:flash-triangle',
      carbon_dioxide: 'mdi:molecule-co2',
      carbon_monoxide: 'mdi:molecule-co'
    },
    switch: {
      outlet: 'mdi:power-plug',
      switch: 'mdi:toggle-switch'
    },
    cover: {
      garage: 'mdi:garage',
      gate: 'mdi:gate',
      blind: 'mdi:blinds',
      curtain: 'mdi:curtains',
      damper: 'mdi:air-filter',
      door: 'mdi:door-closed',
      shade: 'mdi:roller-shade',
      shutter: 'mdi:window-shutter',
      window: 'mdi:window-closed'
    }
  };

  return domainIcons[domain]?.[deviceClass] || getDomainIcon(domain);
};

export const getAreaIcon = (area: { icon?: string | null; name: string }): string => {
  if (area.icon) return area.icon;

  // Default icons based on area name
  const nameIcons: Record<string, string> = {
    'living room': 'mdi:sofa',
    'bedroom': 'mdi:bed',
    'kitchen': 'mdi:silverware-fork-knife',
    'bathroom': 'mdi:shower',
    'garage': 'mdi:garage',
    'garden': 'mdi:flower',
    'office': 'mdi:desk',
    'hallway': 'mdi:door',
    'basement': 'mdi:home-floor-b',
    'attic': 'mdi:home-roof'
  };

  const lowerName = area.name.toLowerCase();
  for (const [key, icon] of Object.entries(nameIcons)) {
    if (lowerName.includes(key)) return icon;
  }

  return 'mdi:home';
};
