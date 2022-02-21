interface TestHooks {
  beforeEach(callback: () => void): void;
  afterEach(callback: () => void): void;
}

/**
 * Starts the Mirage server and makes it available under
 * `this.server` for any tests run within this context,
 * shutting it down afterwards.
 */
export function setupMirage(hooks?: TestHooks): void;
