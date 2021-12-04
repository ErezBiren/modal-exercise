import { useMemo } from "react";

export default function (elementid: string) {
    return useMemo(() => {

        let dialogRoot = document.getElementById(elementid);
        if (!dialogRoot) {
            dialogRoot = document.createElement('div');
            dialogRoot.style.display = 'relative';
            dialogRoot.id = elementid;
            document.body.appendChild(dialogRoot);
        }
        return dialogRoot;
    }, [elementid]);
}
