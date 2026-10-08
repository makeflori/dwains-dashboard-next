import { describe, expect, it } from 'vitest';
import { getDeviceClassIcon, getDomainColor, getDomainIcon } from '../src/utils/icons';

const PLAIN_CIRCLE = 'mdi:radiobox-blank';
const FALLBACK = 'mdi:shape-outline';

describe('device group icons', () => {
  it('gives binary sensors without a device class a recognizable icon', () => {
    expect(getDomainIcon('binary_sensor')).not.toBe(PLAIN_CIRCLE);
    expect(getDeviceClassIcon('binary_sensor')).toBe(getDomainIcon('binary_sensor'));
  });

  it('covers every Home Assistant binary sensor device class', () => {
    const classes = [
      'battery', 'battery_charging', 'carbon_monoxide', 'cold', 'connectivity', 'door', 'garage_door',
      'gas', 'heat', 'light', 'lock', 'moisture', 'motion', 'moving', 'occupancy', 'opening', 'plug',
      'power', 'presence', 'problem', 'running', 'safety', 'smoke', 'sound', 'tamper', 'update',
      'vibration', 'window',
    ];
    for (const deviceClass of classes) {
      const icon = getDeviceClassIcon('binary_sensor', deviceClass);
      expect(icon, deviceClass).not.toBe(getDomainIcon('binary_sensor'));
      expect(icon, deviceClass).toMatch(/^mdi:[a-z0-9-]+$/);
    }
    expect(getDeviceClassIcon('binary_sensor', 'carbon_monoxide')).toBe('mdi:molecule-co');
  });

  it('falls back to the domain icon for unknown device classes', () => {
    expect(getDeviceClassIcon('binary_sensor', 'something_new')).toBe(getDomainIcon('binary_sensor'));
    expect(getDeviceClassIcon('cover', 'something_new')).toBe(getDomainIcon('cover'));
  });

  it('has icons for the newer entity domains', () => {
    for (const domain of ['notify', 'assist_satellite', 'conversation', 'tts', 'stt', 'wake_word', 'datetime']) {
      expect(getDomainIcon(domain), domain).not.toBe(FALLBACK);
    }
  });
});


describe('semantic dashboard colors', () => {
  it('uses the established type palette and humidity family', () => {
    expect(getDomainColor('light')).toBe('#E1A129');
    expect(getDomainColor('energy')).toBe('#65A83F');
    expect(getDomainColor('sensor', 'power')).toBe(getDomainColor('energy'));
    expect(getDomainColor('sensor', 'temperature')).toBe(getDomainColor('climate'));
    expect(getDomainColor('sensor', 'humidity')).toBe(getDomainColor('fan'));
    expect(getDomainColor('humidifier')).toBe(getDomainColor('fan'));
    expect(getDomainColor('scene')).toBe(getDomainColor('event'));
  });

  it('distinguishes the combined room climate from both readings', () => {
    expect(getDomainColor('room_climate')).toBe('#399FA0');
    expect(getDomainColor('room_climate')).not.toBe(getDomainColor('climate'));
    expect(getDomainColor('room_climate')).not.toBe(getDomainColor('humidity'));
  });
});
