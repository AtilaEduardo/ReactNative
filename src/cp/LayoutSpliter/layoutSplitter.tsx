import { SplitterComponent, PanesDirective, PaneDirective } from '@syncfusion/ej2-react-layouts';
import './splitter.component.css';
import * as React from 'react';

const LayoutSplitter = () => {    
    /**
     * Splitter Basic rendering
     */

        // horizontal Splitter content
        const hPaneContent1 = () => {
            return (
                <div className="splitter-content">
                    <div> Left pane
                        <div id='panetext'>size: 25%</div>
                        <div id='panetext'>min: 60px</div>
                    </div>
                </div>
            );
        };
    
        const hPaneContent2 = () => {
            return (
                <div className="splitter-content">
                    <span>Middle pane<div id='panetext'>size: 50%</div><div id='panetext'>min: 60px</div></span>
                </div>
            );
        };
    
        const hPaneContent3 = () => {
            return (
                <div className="splitter-content">
                    <span>Right pane<div id='panetext'>size: 25%</div><div id='panetext'>min: 60px</div></span>
                </div>
            );
        };
    
        // vertical Splitter content.
        const vPaneContent1 = () => {
            return (
                <div className="splitter-content">
                    <span>Top pane<div id='panetext'>size: 30%</div><div id='panetext'>min: 60px</div></span>
                </div>
            );
        };
    
        const vPaneContent2 = () => {
            return (
                <div className="splitter-content">
                    <span>Middle pane<div id='panetext'>size: 40%</div><div id='panetext'>min: 60px</div></span>
                </div>
            );
        };
    
        const vPaneContent3 = () => {
            return (
                <div className="splitter-content">
                    <span>Bottom pane<div id='panetext'>size: 30%</div><div id='panetext'>min: 60px</div></span>
                </div>
            );
        };
    
        return (
            <div id="defaultSplitter" className="control-section" >
                <div className="pane1">
                    <div id="pane-heading">Horizontal Splitter</div>
                    <SplitterComponent height="110px" width="100%" separatorSize={4}>
                        <PanesDirective>
                            <PaneDirective size="25%" min="60px" content = {hPaneContent1}/>
                            <PaneDirective size="50%" min="60px" content = {hPaneContent2}/>
                            <PaneDirective size="25%" min="60px" content = {hPaneContent3}/>
                        </PanesDirective>
                    </SplitterComponent>
                </div>
                <div className="pane2">
                    <div id="pane-heading">Vertical Splitter</div>
                    <SplitterComponent height="240px" width="100%" orientation="Vertical" separatorSize={4}>
                        <PanesDirective>
                            <PaneDirective size="30%" min="60px" content={vPaneContent1} />
                            <PaneDirective size="40%" min="60px" content={vPaneContent2} />
                            <PaneDirective size="30%" min="60px" content={vPaneContent3} />
                        </PanesDirective>
                    </SplitterComponent>
                </div>
            </div>
        );
    }
export { LayoutSplitter };
