
import * as t from 'io-ts';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Element, IElement} from './RTTI_Element';




            export interface IDeviceDefinition_UdiDeviceIdentifier {
                
                
                    /**
                     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                     */
                    id? : string;
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
                     */
                    deviceIdentifier? : string;
                    

                    /**
                     * Extensions for deviceIdentifier
                     */
                    _deviceIdentifier? : IElement;
                    

                    /**
                     * The organization that assigns the identifier algorithm.
                     */
                    issuer? : string;
                    

                    /**
                     * Extensions for issuer
                     */
                    _issuer? : IElement;
                    

                    /**
                     * The jurisdiction to which the deviceIdentifier applies.
                     */
                    jurisdiction? : string;
                    

                    /**
                     * Extensions for jurisdiction
                     */
                    _jurisdiction? : IElement;
                    
            }
        


        export const RTTI_DeviceDefinition_UdiDeviceIdentifier: t.Type<IDeviceDefinition_UdiDeviceIdentifier> = t.recursion( 'IDeviceDefinition_UdiDeviceIdentifier', () =>
                
        t.partial({
            id: t.string,
extension: t.array(RTTI_Extension),
modifierExtension: t.array(RTTI_Extension),
deviceIdentifier: t.string,
_deviceIdentifier: RTTI_Element,
issuer: t.string,
_issuer: RTTI_Element,
jurisdiction: t.string,
_jurisdiction: RTTI_Element
        })
        
        );
        

        