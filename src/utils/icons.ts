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
  // Semantic type colours; active states and alarms are handled by their consumers.
  if (domain === 'binary_sensor') {
    const deviceClassColors: Record<string, string> = {
      // Red — warning-related sensor types (actual alarm state handled by UI)
      moisture: '#D94F58',
      smoke: '#D94F58',
      gas: '#D94F58',
      carbon_monoxide: '#D94F58',
      problem: '#D94F58',
      safety: '#D94F58',
      tamper: '#D94F58',
      heat: '#D94F58',
      cold: '#D94F58',

      // Light and energy
      light: '#E5B83B',
      plug: '#65A83F',
      power: '#65A83F',

      // Controls and access
      lock: '#424B93',

      // Earth tone — openings
      window: '#AD7253',
      door: '#AD7253',
      opening: '#AD7253',
      garage_door: '#AD7253',

      // Neutral — informational sensors
      battery: '#7A8799',
      battery_charging: '#7A8799',
      update: '#7A8799',

      // Green — presence / active process
      occupancy: '#3F9B6D',
      presence: '#3F9B6D',
      running: '#3F9B6D',

      // Slate — neutral activity
      motion: '#7A8799',
      vibration: '#7A8799',

      // Media-like signal/event state
      sound: '#C16AAF',

      // Neutral — connectivity
      connectivity: '#7A8799',
    };
    if (deviceClass && deviceClassColors[deviceClass]) {
      return deviceClassColors[deviceClass]!;
    }
  }

  if (domain === 'sensor') {
    const sensorDeviceClassColors: Record<string, string> = {
      temperature: '#239CB5',
      humidity: '#39B5AE',
      power: '#65A83F',
      energy: '#65A83F',
      battery: '#7A8799',
    };
    if (deviceClass && sensorDeviceClassColors[deviceClass]) {
      return sensorDeviceClassColors[deviceClass]!;
    }
  }

  const colors: Record<string, string> = {
    // Red — alarm / danger
    alarm_control_panel: '#D94F58',

    // Warm yellow for light; green for energy
    light: '#E5B83B',
    wattage: '#65A83F',
    energy: '#65A83F',

    // Blue — controls
    switch: '#367DD5',
    input_boolean: '#367DD5',
    lock: '#424B93',
    select: '#367DD5',
    input_select: '#367DD5',
    button: '#367DD5',
    input_button: '#367DD5',
    remote: '#367DD5',

    // Orange — shading / gates
    cover: '#D98928',

    // Neutral slate — general sensors / updates
    sensor: '#7A8799',
    update: '#7A8799',

    // Neutral people/device/activity
    person: '#7A8799',
    binary_sensor: '#7A8799',
    vacuum: '#7A8799',

    // Magenta — media / events
    media_player: '#C16AAF',
    event: '#C16AAF',

    // Blue-cyan — climate / temperature
    climate: '#239CB5',
    temperature: '#239CB5',

    // Teal — air / humidity
    fan: '#39B5AE',
    humidity: '#39B5AE',

    // Violet — cameras
    camera: '#8065C7',
  };

  return colors[domain] || '#7A8799';
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
