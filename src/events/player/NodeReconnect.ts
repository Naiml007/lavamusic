import { Event, Lavamusic } from '../../structures/index.js';
import BotLog from '../../utils/BotLog.js';

export default class NodeReconnect extends Event {
    constructor(client: Lavamusic, file: string) {
        super(client, file, {
            name: 'nodeReconnect',
        });
    }

    public async run(node: string): Promise<void> {
        const message = `Node ${node} reconnected`;

        this.client.logger.warn(message);
        BotLog.send(this.client, message, 'warn');
    }
}

/**
 * Project: lavamusic
 * Author: Appu
 * Company: Coders
 * Copyright (c) 2024. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
